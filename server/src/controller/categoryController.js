const ApiError = require('../error/ApiError');
const CategoryService = require('../service/CategoryService')
const { validationResult } = require('express-validator');

class CategoryController {
    async create(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const {title} = req.body;
            const category = await CategoryService.create(title)
            return res.json(category);
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const categories = await CategoryService.getAll()
            console.log(categories);
            return res.json(categories);
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async getById(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const {id} = req.params;
            console.log(id);
            const category = await CategoryService.getById(id)
            return res.json(category);
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CategoryController();
