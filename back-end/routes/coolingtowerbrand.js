var express = require('express');
var router = express.Router();

const controller = require("./../controllers/coolingtowerbrands");

router
    .route("https://localhost:3001/")
    .get(controller.get)
    .post(controller.add);

router
    .route("https://localhost:3001/:id")
    .put(controller.update)
    .get(controller.getOne)
    .delete(controller.deleteOne);

module.exports = router;