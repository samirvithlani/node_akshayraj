//functions --> api -->behave as a controller

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

module.exports = {
  getAllUsers,
  getUsers,
  getUserById,
};
