var express = require('express');
var router = express.Router();

const controller = require("./../controllers/coolingtower");

router
    .route("https://holybucketofwater-mm4b.vercel.app/")
    .get(controller.get)
    .post(controller.add);

router
    .route("https://holybucketofwater-mm4b.vercel.app/:id")
    .put(controller.update)
    .get(controller.getOne)
    .delete(controller.deleteOne);

module.exports = router;