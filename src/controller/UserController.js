//functions --> api -->behave as a controller
const userModel = require("../models/UserModel");
const encryptPassword = require("../util/encryptPassword");
const tokenUtil = require("../util/TokenUtil");

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
  const users = await userModel.find().populate("role");
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

  const hashedPassword = await encryptPassword.hashPassword(req.body.password);
  //req.body.password = hashedPassword;
  const userObj = Object.assign({}, req.body, { password: hashedPassword });

  const savedUser = await userModel.create(userObj);

  res.json({
    message: "user added successfully",
    data: savedUser,
  });
};

const getUserById1 = async (req, res) => {
  //params
  const id = req.params.id;
  const user = await userModel.findById(id);
  if (user) {
    res.json({
      message: "user found",
      data: user,
    });
  } else {
    res.json({
      message: "user not found",
    });
  }
};

const deleteUser = async (req, res) => {
  //delete using id
  const id = req.params.id;
  if (id) {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (deletedUser) {
      res.json({
        message: "user deleted successfully",
        data: deletedUser,
      });
    } else {
      res.json({
        message: "user not found",
      });
    }
  } else {
    res.json({
      message: "id is not provided",
    });
  }
};

//put --> get / post
//id --> id --> data --> update

const updateUser = async (req, res) => {
  const id = req.params.id;
  const dataToUpdate = req.body;

  if (id) {
    const updatedUser = await userModel.findByIdAndUpdate(id, dataToUpdate, {
      new: true,
    });
    if (updatedUser) {
      res.json({
        message: "user updated successfully",
        data: updatedUser,
      });
    } else {
      res.json({
        message: "error in updating user",
      });
    }
  } else {
    res.json({
      message: "id is not provided",
    });
  }
};

const loginUser = async (req, res) => {
  //email,password
  const { email, password } = req.body;
  const userFromEmail = await userModel.findOne({ email: email });
  //seema..
  if (userFromEmail) {
    //const isMatch = userFromEmail.password == password;
    const isMatch = encryptPassword.comparePassword(
      password,
      userFromEmail.password
    );
    if (isMatch) {
      const token = tokenUtil.generateToken(userFromEmail.toObject());
      res.status(200).json({
        message: "login success",
        //data:userFromEmail
        data: token,
      });
    } else {
      res.status(400).json({
        message: "password not matched",
      });
    }
  } else {
    res.status(400).json({
      message: "user not found",
    });
  }
};

module.exports = {
  getAllUsers,
  getUsers,
  getUserById,
  getUsersFromdb,
  addUser,
  getUserById1,
  deleteUser,
  updateUser,
  loginUser,
};
