const express = require('express');
const app = express();


//router
const userRoutes = require("./src/routes/UserRoutes")


//routes use
//localhost:3000/user/user
app.use("/user",userRoutes)

//server creation
const PORT = 3000;
app.listen(PORT,()=>{
    console.log('Server is running at port ',PORT);
})