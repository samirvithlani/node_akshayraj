console.log("users file called....")
var userName = "amit"
var userAge = 30

const displayUserData = ()=>{
    console.log("userData")
}
// module.exports = userName
// module.exports = userAge
module.exports = {
    userName,userAge,displayUserData
}
//module.exports = displayUserData    