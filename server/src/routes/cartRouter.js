const Router = require('express');
const router = new Router();
const cartItemController = require('../controller/cartController');

router.post('/add', cartItemController.add);
router.post('/remove', cartItemController.remove);
router.post('/clear', cartItemController.clear);
router.post('/checkout', cartItemController.checkout);
router.get('/summary', cartItemController.summary);
router.get('/', cartItemController.getAll);

module.exports = router;
