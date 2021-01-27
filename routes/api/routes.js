const express = require('express');
const router = express.Router();
const routesCtrl = require('../../controllers/api/routes');

router.get("/", routesCtrl.index);

module.exports = router;