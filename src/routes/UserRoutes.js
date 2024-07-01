const express = require('express')
const router = express.Router() //
const userController = require("../controller/UserController")
// router.get("/user",userController.getAllUsers)
// router.get("/users",userController.getUsers)
// router.get("/user/:id",userController.getUserById)
router.get("/user",userController.getUsersFromdb)
router.get("/user/:id",userController.getUserById1)
router.post("/user",userController.addUser)

module.exports = router
