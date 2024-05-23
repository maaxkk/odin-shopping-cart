const Router = require('express');
const router = new Router();
const cartItemController = require('../controller/cartController');
const { check } = require('express-validator');

router.post(
    '/add',
    [
        check('candleId', 'Candle id must be UUID').exists().isString().isLength({ min: 32 }),
        check('userId', 'User id must be UUID').exists().isString().isLength({ min: 32 }),
    ],
    cartItemController.add
);

router.post(
    '/remove',
    [
        check('candleId', 'Candle id must be UUID').exists().isString().isLength({ min: 32 }),
        check('userId', 'User id must be UUID').exists().isString().isLength({ min: 32 }),
    ],
    cartItemController.remove
);

router.delete(
    '/clear',
    [check('userId', 'User id must be UUID').exists().isString().isLength({ min: 32 })],
    cartItemController.clear
);

router.post(
    '/checkout',
    [check('userId', 'User id must be UUID').exists().isString().isLength({ min: 32 })],
    cartItemController.checkout
);

router.get(
    '/summary',
    [check('userId', 'User id must be UUID').exists().isString().isLength({ min: 32 })],
    cartItemController.summary
);

router.get('/', cartItemController.getAll);

module.exports = router;
