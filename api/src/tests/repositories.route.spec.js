const request = require('supertest');
const express = require('express');
const axios = require('axios');
const repositories = require('../routes/repositories');
const { assert } = require('chai');

const app = express();
app.use('/api/repositories', repositories);

jest.mock('axios');
axios.get
    .mockResolvedValue({
        data: {
            total_count: 0,
            items: []
        }
    });

describe('Testing repositories route', () => {
    it('Serching github repositories', async () => {
        const res = await request(app).get('/api/repositories/search?page=1&language=javascript&query=react')
        const { body, status } = res;
        console.log(status)
        // const { data } = body
        assert(status, 200)
    });
});

