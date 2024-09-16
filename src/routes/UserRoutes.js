const express = require('express')
const router = express.Router() //
const userController = require("../controller/UserController")
const authmiddleware = require("../util/AuthMiddleware")
// router.get("/user",userController.getAllUsers)
// router.get("/users",userController.getUsers)
// router.get("/user/:id",userController.getUserById)
router.get("/user",authmiddleware,userController.getUsersFromdb)
router.get("/user/:id",userController.getUserById1)
router.post("/user",userController.addUser)
router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
router.post("/login",userController.loginUser)
//get user from token...
//req.body token.... -> user --> object -->front end

module.exports = router
