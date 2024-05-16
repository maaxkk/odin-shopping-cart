const Router = require('express');
const router = new Router();
const candleController = require('../controller/candleController');

router.post('/', candleController.create);
router.get('/', candleController.getAll);

module.exports = router;
