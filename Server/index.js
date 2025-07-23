const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const readRouter = require("./routes/readRouter");
const createRouter = require("./routes/createRouter");
const updateRouter = require("./routes/updateRouter");
const deleteRouter = require("./routes/deleteRouter");
const BlogProject = require("./models/Blog");
const usermodel = require("./models/User");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
mongoose.connect("mongodb://127.0.0.1:27017/Blog");

// Routes
app.use("/readBlog", readRouter);
app.use("/readBlog/:id", readRouter);
app.use("/createBlog", createRouter);
app.use("/updateBlog", updateRouter);
app.use("/deleteBlog", deleteRouter);

app.get("/readBlogById", async (req, res) => {
  let { id } = req.query;
  await BlogProject.findById(id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/createUser", async (req, res) => {
  let userEmail = req.query.email;
  let userPassword = req.query.password;
  await usermodel
    .create({ email: userEmail, password: userPassword })
    .then(() => {
      console.log("User created successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/login", async (req, res) => {
  let userEmail = req.query.email;
  let userPassword = req.query.password;
  let user = await usermodel.findOne({ email: userEmail });
  if (!user) {
    console.log("User not found");
    return;
  } else {
    if (user.password === userPassword) {
      res.json({ message: "Login successful" });
    } else {
      console.log("Incorrect password");
      res.json({ message: "Incorrect password" });
    }
  }
});

app.listen(3005, () => {
  console.log("listening on port 3005");
});
