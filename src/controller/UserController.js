//functions --> api -->behave as a controller
const userModel = require("../models/UserModel");

const getAllUsers = (req, res) => {
  res.json({
    message: "Test API is called",
  });
};

let users = [
  {
    id: 1,
    name: "amit",
  },
  {
    id: 2,
    name: "sumit",
  },
];

const getUsers = (req, res) => {
  res.json({
    message: "user api called",
    data: users,
  });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  console.log("Id is ", id);
  console.log("params", req.params);

  var foundUser = users.find((u) => u.id == id);

  if (foundUser) {
    res.json({
      message: "user api called",
      data: foundUser,
    });
  } else {
    res.json({
      message: "user not found",
    });
  }
};

const getUsersFromdb = async (req, res) => {
  //db.users.find()
  const users = await userModel.find();
  res.json({
    message: "user fetch successfully",
    data: users,
  });
};

//post api...

const addUser = async (req, res) => {
  //request :
  //body,params,query
  console.log("Request body is ", req.body);

  const savedUser = await userModel.create(req.body);

  res.json({
    message: "user added successfully",
    data: savedUser,
  });
};

module.exports = {
  getAllUsers,
  getUsers,
  getUserById,
  getUsersFromdb,
  addUser,
};
