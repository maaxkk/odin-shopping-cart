const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer token
        if (!token) {
            return res.status(401).json({ message: 'Not authorizated' });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        console.log(req.user);
        next();
    } catch (e) {
        res.status(401).json({ message: 'Not authorizated' });
    }
};
