const express = require('express');
const app = express();


//api  creation --> req,res

//localhost:3000/test
const users = [
    {
        id:1,
        name:"amit"
    },
    {
        id:2,
        name:"sumit"
    }
]
app.get("/test",(req,res)=>{
    console.log('Test API is called');
    //res.send("Test API is called");
    res.json({
        message:"Test API is called",
        data:users
    })
})



//server creation
const PORT = 3000;
app.listen(PORT,()=>{
    console.log('Server is running at port ',PORT);
})