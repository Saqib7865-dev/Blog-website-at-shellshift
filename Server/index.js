const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogProject = require("./Models/Blog");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Blog");

app.post("/createBlog", async (req, res) => {
  await BlogProject.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
app.get("/readBlog", async (req, res) => {
  await BlogProject.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
app.delete("/deleteBlog", async (req, res) => {
  const { id } = req.body;

  const deletedBlog = await BlogProject.findByIdAndDelete(id);

  if (!deletedBlog) {
    return res.status(404).json({
      message: "Blog not found",
    });
  }
});
app.listen(3005, () => {
  console.log("listening on port 3001");
});
