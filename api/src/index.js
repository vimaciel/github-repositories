const express = require('express');
const { name } = require('../package.json');

const app = express();
require('./startup/routes')(app);

const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => console.log(`${name} is running on port ${port}`));
