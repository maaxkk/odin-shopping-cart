const Router = require('express');
const router = new Router();
const cartItemController = require('../controller/cartController');

router.post('/add', cartItemController.add);
router.get('/summary', cartItemController.summary);
router.get('/', cartItemController.getAll);

module.exports = router;
