const user = require('./users')
console.log("Hello this is app.js")
console.log("userName --- ",user)
//user()
// console.log("userAge --- ",user.userAge)
// console.log("userName --- ",user.userName)
user.displayUserData()


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





//http server || express server
const http = require('http');
const server = http.createServer((req, res) => {})
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});