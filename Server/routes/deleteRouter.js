const express = require("express");
const router = express.Router();
const { handleDeleteUser } = require("../controllers/CRUD");

router.route("/:id").delete(handleDeleteUser);

module.exports = router;
