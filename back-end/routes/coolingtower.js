var express = require('express');
var router = express.Router();

const controller = require("./../controllers/coolingtower");

router
    .route("/")
    .get(controller.get)
    .post(controller.add);

router
    .route("/:id")
    .put(controller.update)
    .get(controller.getOne)
    .delete(controller.deleteOne);

module.exports = router;