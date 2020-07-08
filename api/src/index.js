const app = require('express')();
const { name } = require('../package.json');


app.get('/', (res, req) => {
    return req.status(200).send("Initial commit");
})

const port = 3001
app.listen(port, () => console.log(`${name} executando na porta ${port}.`))

module.exports = app