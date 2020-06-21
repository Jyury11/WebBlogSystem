var logger = require("./logger.js").system;
module.exports = function (options){
    return function (err, req, res, net){
        logger.error(err.message);
        next(err);
    };
};