const express = require('express');
const helmet = require('helmet');

const repositories = require('../routes/repositories');

module.exports = (app) => {
    app.use(helmet());
    app.use(express.json());    
    app.use('/api/repositories', repositories);
}