const { User, Cart } = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expire: '24h' });
};

class UserController {
    async registration(req, res, next) {
        const { email, fullname, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect password or email'));
        }
        const candidate = await User.findOne({ where: email });
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exists'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, fullname, password: hashPassword });
        const basket = await Cart.create({ userId: user.id });
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async login(req, res, next) {
        console.log('called');
        const { email, password } = req.body;
        console.log(email, password);
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return next(ApiError.internal('User not found'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Incorrect password!'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json(password);
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });
    }
}

module.exports = new UserController();
