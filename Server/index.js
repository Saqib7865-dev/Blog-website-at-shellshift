const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const readRouter = require("./routes/readRouter");
const createRouter = require("./routes/createRouter");
const updateRouter = require("./routes/updateRouter");
const deleteRouter = require("./routes/deleteRouter");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Blog");

// Routes
app.use("/readBlog", readRouter);
app.use("/createBlog", createRouter);
app.use("/updateBlog", updateRouter);
app.use("/deleteBlog", deleteRouter);

app.listen(3005, () => {
  console.log("listening on port 3001");
});
