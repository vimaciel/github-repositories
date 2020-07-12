const express = require('express');
const { name } = require('../package.json');
const cors = require('cors');

const app = express();
// Only for development environment
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000'],
    methods: 'GET, PUT, POST, DELETE'
}))

require('./startup/routes')(app);
const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => console.log(`${name} is running on port ${port}`));
