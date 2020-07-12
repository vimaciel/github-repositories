const express = require('express');
const router = express.Router();
const axios = require('axios');
const validateUrlQuery = require('../middlewares/validate-url-query');
const errorResponse = require('../helpers/error-response');
const successResponse = require('../helpers/success-response');

router.get('/search', [validateUrlQuery('page', 'language', 'query')], async (req, res) => {
    const { query, page, language } = req.query;
    const limit = 10;
    const ghRepositoriesUrl = `https://api.github.com/search/repositories?q=${query}+language:${language}&sort=stars&order=desc&page=${page}&per_page=${limit}`;

    try {
        const response = await axios.get(ghRepositoriesUrl);
        const customResponse = await buildResponse(response)
        return res.status(200).send(successResponse(customResponse));
    } catch {
        return res.status(400).send(errorResponse('Desculpa algum problema aconteceu com a pesquisa'))
    }
});

const buildResponse = async (apiResponse) => {
    const { data } = apiResponse;

    const items = data.items.map(item => {
        const { name, full_name, html_url: url, description, owner, forks, stargazers_count: stars, languages_url } = item;
        const { login, avatar_url, html_url: owner_html_url } = owner;

        return {
            name,
            full_name,
            url,
            description,
            forks,
            stars,
            owner: {
                login,
                avatar_url,
                page_url: owner_html_url
            }
        }
    });


    return {
        total: data.total_count,
        items
    };
}

module.exports = router;