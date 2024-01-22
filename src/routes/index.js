const express = require('express');
const cityRouter = require('./city.router');
const userRouter = require('./user.router');
const carRouter = require('./car.router');
const router = express.Router();

router.use(cityRouter)
router.use(userRouter)
router.use(carRouter)


module.exports = router;