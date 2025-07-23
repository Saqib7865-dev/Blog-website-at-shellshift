const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  title: { type: String },
  content: { type: String },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("BlogProject", blogSchema);
