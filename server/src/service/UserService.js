const { User } = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
};

class UserService {
    async registration(email, password, fullName, role) {
        try {
            const candidate = await User.findOne({ where: { email } });
            if (candidate) {
                throw new Error('User with this email already exists');
            }
            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({ email, fullName, password: hashPassword });
            const token = generateJwt(user.id, email, role);
            return token;
        } catch (e) {
            throw new Error(e);
        }
    }

    async login(email, password) {
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw new Error('User not found');
            }
            let comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                throw new Error('Incorrect password!');
            }
            const token = generateJwt(user.id, user.email, user.role);
            return token;
        } catch (e) {
            throw new Error(e);
        }
    }

    async getAll() {
        try {
            const users = await User.findAll();
            return users;
        } catch (e) {
            throw new Error('Could find any users');
        }
    }

    async check(id, email, role) {
        try {
            const token = generateJwt(id, email, role);
            return token;
        } catch (e) {
            throw new Error('Could not authorize user');
        }
    }
}

module.exports = new UserService();
