const ApiError = require('../error/ApiError.js');

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.state(500).json({ message: 'Unexpected error...' });
};
