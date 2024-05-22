const ApiError = require('../error/ApiError');
const UserService = require('../service/UserService');
const { validationResult } = require('express-validator');

class UserController {
    async registration(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const { email, fullName, password, role } = req.body;
            const token = await UserService.registration(email, password, fullName, role);
            return res.json(token);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async login(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const { email, password } = req.body;
            const token = await UserService.login(email, password);
            console.log(token, 'here');
            return res.json(token);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const users = await UserService.getAll();
            return res.json(users);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async check(req, res, next) {
        try {
            const { id, email, role } = req.user;
            const token = await UserService.check(id, email, role);
            return res.json(token);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new UserController();
