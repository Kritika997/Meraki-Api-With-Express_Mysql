const express = require("express");
const control = require("../controller/api");
const router = new express.Router();

router.get("/get",control.get);

router.post("/post",control.post);

router.put("/put",control.put);

router.delete("/delete",control.delete);

module.exports = router;