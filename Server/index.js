const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const readRouter = require("./routes/readRouter");
const createRouter = require("./routes/createRouter");
const updateRouter = require("./routes/updateRouter");
const deleteRouter = require("./routes/deleteRouter");
const usermodel = require("./models/User");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Blog");

// Routes
app.use("/readBlog", readRouter);
app.use("/createBlog", createRouter);
app.use("/updateBlog", updateRouter);
app.use("/deleteBlog", deleteRouter);

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
  console.log(
    `FRONTEND--> userEmail: ${userEmail}, userPassword: ${userPassword}`
  );

  let user = await usermodel.findOne({ email: userEmail });
  console.log(
    `BACKEND--> userEmail: ${user.email}, userPassword: ${user.password}`
  );
  if (!user) {
    console.log("User not found");
    return;
  } else {
    if (user.password === userPassword) {
      console.log("Login successful");
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
