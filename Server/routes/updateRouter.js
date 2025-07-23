const express = require("express");
const router = express.Router();
const { handleUpdateUser } = require("../controllers/CRUD");

router.route("/:id").put(handleUpdateUser);

module.exports = router;
