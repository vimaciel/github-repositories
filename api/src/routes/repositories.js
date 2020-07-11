const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
    const { query, page, language } = req.query;
    const limit = 10;
    const ghRepositoriesUrl = `https://api.github.com/search/repositories?q=${query}+language:${language}&sort=stars&order=desc&page=${page}&per_page=${limit}`;
    const response = await axios.get(ghRepositoriesUrl);
    return res.status(200).send(await buildResponse(response));
});

const buildResponse = async (apiResponse) => {
    const { data } = apiResponse;

    const items = await Promise.all(data.items.map(async item => {
        const { name, full_name, html_url: url, description, owner, forks, stargazers_count: stars, languages_url } = item;
        const { login, avatar_url, html_url: owner_html_url } = owner;
        const languages = await axios.get(languages_url);

        return {
            name,
            full_name,
            url,
            description,
            forks,
            stars,
            languages: languages.data,
            owner: {
                login,
                avatar_url,
                page_url: owner_html_url
            }
        }
    }));


    return {
        total: data.total_count,
        items
    };
}

module.exports = router;