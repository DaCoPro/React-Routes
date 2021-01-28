const express = require('express');
const router = express.Router();
const routesCtrl = require('../../controllers/api/routes');

router.get("/", routesCtrl.index);
router.post("/", routesCtrl.create);
router.get("/:id", routesCtrl.show);
router.put("/:id", routesCtrl.update);
router.delete("/:id", routesCtrl.deleteOne);

module.exports = router;