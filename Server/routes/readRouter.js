const express = require("express");
const router = express.Router();
const { handelGetAllUsers, getUserById } = require("../controllers/CRUD");
router.get("/", handelGetAllUsers);
router.get("/:id", getUserById);
module.exports = router;
