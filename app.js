const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());


//router
const userRoutes = require("./src/routes/UserRoutes");
const roleRoutes = require("./src/routes/RoleRoutes");

//routes use
//localhost:3000/user/user
app.use("/user", userRoutes);
app.use("/role", roleRoutes);

//db connection

mongoose
  .connect("mongodb://127.0.0.1:27017/akshayraj_node")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connection failed");
  });

//server creation
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running at port ", PORT);
});
