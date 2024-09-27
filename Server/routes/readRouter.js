const express = require("express");
const router = express.Router();
const { handelGetAllUsers } = require("../controllers/CRUD");
router.get("/", handelGetAllUsers);
module.exports = router;
