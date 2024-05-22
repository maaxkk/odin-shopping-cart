const { Category } = require('../models/models');

class CategoryService {
    async getAll() {
        try {
            return await Category.findAll();
        } catch (e) {
            throw new Error('Categories not found')
        }
    }

    async getById(id) {
        try {
            return await Category.findOne({where: {id: id} })
        } catch (e) {
            throw new Error('Category not found')
        }
    }

    async create(title) {
        try {
            return await Category.create({title: title})
        } catch (e) {
            throw new Error('Unable to create category')
        }
    }

}

module.exports = new CategoryService();