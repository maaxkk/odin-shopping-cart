const Router = require('express');
const router = new Router();
const candleRouter = require('./candleRouter.js');
const userRouter = require('./userRouter.js');
const cartRouter = require('./cartRouter.js')
const categoryRouter = require('./categoryRouter.js');

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/cart', cartRouter);
router.use('/candle', candleRouter);

module.exports = router;
