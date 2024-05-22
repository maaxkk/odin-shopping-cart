const Router = require('express');
const router = new Router();
const cartItemController = require('../controller/cartController');
const { check } = require('express-validator');

router.post('/add', [
    check('candleId', 'Candle id must be integer')
        .exists()
        .isInt(),
    check('userId', 'User id must be integer')
        .exists()
        .isInt(),
], cartItemController.add);

router.post('/remove',[
    check('candleId', 'Candle id must be integer')
        .exists()
        .isInt(),
    check('userId', 'User id must be integer')
        .exists()
        .isInt(),
], cartItemController.remove);

router.post('/clear',[
    check('userId', 'User id must be integer')
        .exists()
        .isInt(),
], cartItemController.clear);

router.post('/checkout',[
    check('userId', 'User id must be integer')
        .exists()
        .isInt(),
], cartItemController.checkout);

router.get('/summary', [
    check('userId', 'User id must be integer')
        .exists()
        .isInt(),
], cartItemController.summary);

router.get('/', cartItemController.getAll);

module.exports = router;
