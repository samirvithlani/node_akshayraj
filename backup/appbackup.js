const user = require('./users')
console.log("Hello this is app.js")
console.log("userName --- ",user)
//user()
// console.log("userAge --- ",user.userAge)
// console.log("userName --- ",user.userName)
user.displayUserData()


//http server || express server
const http = require('http');
const server = http.createServer((req, res) => {})
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});