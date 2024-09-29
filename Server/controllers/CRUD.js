const multer = require("multer");
const BlogProject = require("../models/Blog");
async function handelGetAllUsers(req, res) {
  await BlogProject.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

async function handleAddUser(req, res) {
  const image = req.file?.filename;
  const { title, content } = req.body;
  if (!image) {
    return res.status(400).json({ message: "Image upload failed" });
  }
  await BlogProject.create({ title, content, image })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

async function handleUpdateUser(req, res) {
  const { id } = req.params;
  const updatedBlog = await BlogProject.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedBlog) {
    return res.status(404).json({
      message: "Blog not found",
    });
  }
}

async function handleDeleteUser(req, res) {
  const { id } = req.params;
  const deletedBlog = await BlogProject.findByIdAndDelete(id);
  if (!deletedBlog) {
    return res.status(404).json({
      message: "Blog not found",
    });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;
  const user = await BlogProject.findById(id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
}
module.exports = {
  handelGetAllUsers,
  handleAddUser,
  handleUpdateUser,
  handleDeleteUser,
  getUserById,
};
