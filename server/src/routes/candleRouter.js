const Router = require('express');
const router = new Router();
const candleController = require('../controller/candleController');
const { check, param } = require('express-validator');

router.post(
    '/',
    [
        check('title', "Title can't be empty with min length 3").exists().isLength({ min: 3 }).isString(),
        check('price', 'Price is integer and bigger then 0').exists().isInt({ gt: 1 }),
        check('amount', 'Amount is integer and bigger then 0').exists().isInt({ gt: 1 }),
        check('categoryId', 'CategoryId must be UUID!').exists().isLength({ min: 32 }),
    ],
    candleController.create
);

router.get('/:id', [param('id', 'Id must be integer').exists().isInt()], candleController.getById);

router.get('/', candleController.getAll);

module.exports = router;
