const express = require("express");
const router = express.Router();
const BlogProject = require("../models/Blog");
const { handelGetAllUsers } = require("../controllers/CRUD");
router.get("/", handelGetAllUsers);
module.exports = router;
