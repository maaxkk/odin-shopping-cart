const Router = require('express');
const router = new Router();
const categoryController = require('../controller/categoryController');
const { check, param } = require('express-validator');

router.post(
    '/',
    [check('title', "Title can't be empty with min length 3").exists().isLength({ min: 3 })],
    categoryController.create
);

router.get('/:id', [param('id', 'Id must be integer').exists().isInt()], categoryController.getById);

router.get('/', categoryController.getAll);

module.exports = router;
