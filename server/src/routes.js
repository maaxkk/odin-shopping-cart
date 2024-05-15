const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getCandles);
router.get("/:id", controller.getCandleById);

module.exports = router;
