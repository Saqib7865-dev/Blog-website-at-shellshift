const express = require("express");
const router = express.Router();
const { handleAddUser } = require("../controllers/CRUD");
const multer = require("multer");
const path = require("path");
// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/Images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fielname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("file"), handleAddUser);
module.exports = router;
