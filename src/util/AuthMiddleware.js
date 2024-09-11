// //const authMiddelware = (token) =>(req,res,next)=>{
//     const authMiddelware = (req,res,next)=>{
//         const token = req.headers.authorization;
//         console.log("token",token);
//     if(token){
//         next();
//     }
//     else{
//         res.status(401).send("Unauthorized");
//     }

// }

const jwt = require('jsonwebtoken');
const secret = "akshayraj";

const authMiddelware = async(req, res, next) => {
    var token = req.headers.authorization;
    if(token){
        //check it is bearer token or not...
        if(token.startsWith("Bearer")){
            token = token.slice(7, token.length);

            try{
            const isverified = jwt.verify(token, secret);
            console.log("isverified",isverified);
            next();
            }catch(err){
                res.status(401).send("Unauthorized token is invalid");
            }
            

        }
        else{
            res.status(401).send("Unauthorized token is not bearer token....");
        }


    }
    else{
        res.status(401).send("Unauthorized token is not given..");
    }
    
}



module.exports = authMiddelware;