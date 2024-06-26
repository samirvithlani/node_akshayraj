const express = require('express')
const router = express.Router() //
const userController = require("../controller/UserController")
router.get("/user",userController.getAllUsers)
router.get("/users",userController.getUsers)
module.exports = router
