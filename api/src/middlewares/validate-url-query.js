
const errorResponse = require('../helpers/error-response');
const _ = require('lodash');

module.exports = (...params) => {
    return async (req, res, next) => {

        let result = params.map(parm => {
            const result = _.has(req.query, parm);

            if (!result) {
                return `Parametro: "${parm}" não encontrado.`
            }
        });

        result = result.filter(res => res);


        if (result && result.length > 0) {
            return res.status(400).send(errorResponse(...result));
        }

        next();
    }
}