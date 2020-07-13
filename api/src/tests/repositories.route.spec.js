const request = require('supertest');
const express = require('express');
const axios = require('axios');
const repositories = require('../routes/repositories');
const { assert, expect } = require('chai');

const app = express();
app.use('/api/repositories', repositories);

jest.mock('axios');
axios.get
    .mockReturnValueOnce({
        data: {
            total_count: 2,
            items: [{
                "name": "react",
                "full_name": "facebook/react",
                "url": "https://github.com/facebook/react",
                "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
                "forks": 29689,
                "stars": 151990,
                "owner": {
                    "login": "facebook",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
                    "page_url": "https://github.com/facebook"
                }
            },
            {
                "name": "react-native",
                "full_name": "facebook/react-native",
                "url": "https://github.com/facebook/react-native",
                "description": "A framework for building native apps with React.",
                "forks": 19660,
                "stars": 88622,
                "owner": {
                    "login": "facebook",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
                    "page_url": "https://github.com/facebook"
                }
            }]
        }
    })
    .mockReturnValueOnce(() => {
        throw new Error();
    });

describe('Testing repositories route', () => {
    it('Searching github repositories', async () => {
        const res = await request(app).get('/api/repositories/search?page=1&language=javascript&query=react')
        const { body, status } = res;
        const { success, data } = body;
        expect(success).to.be.true;
        expect(data.items.length).to.equal(2);
        expect(data.total).to.equal(2);
        assert(status, 200)
    });

    it ('Searching github repositories with error from github api', async () => {
        const res = await request(app).get('/api/repositories/search?page=1&language=javascript&query=react')
        const { body, status } = res;          
        const { success, messages } = body;
        expect(success).to.be.false;
        expect(messages[0]).to.contains('algum problema aconteceu');

        assert(status, 400);
    });

    it ('Missing required parameters on searching github repositories route', async () => {
        const res = await request(app).get('/api/repositories/search?page=1')
        const { body, status } = res;          
        const { success, messages } = body;
        expect(success).to.be.false;
        expect(messages[0]).to.contains('não encontrado');

        assert(status, 400);
    });
});

