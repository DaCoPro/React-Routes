const express = require('express');
const router = express.Router();
const routesCtrl = require('../../controllers/api/routes');

router.get("/", routesCtrl.index);
router.post("/", routesCtrl.create);

module.exports = router;