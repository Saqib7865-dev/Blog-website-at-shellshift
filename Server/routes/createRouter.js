const express = require("express");
const router = express.Router();
const { handleAddUser } = require("../controllers/CRUD");
router.post("/", handleAddUser);
module.exports = router;
