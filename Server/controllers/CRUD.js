const BlogProject = require("../models/Blog");
async function handelGetAllUsers(req, res) {
  await BlogProject.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

async function handleAddUser(req, res) {
  await BlogProject.create(req.body)
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
module.exports = {
  handelGetAllUsers,
  handleAddUser,
  handleUpdateUser,
  handleDeleteUser,
};
