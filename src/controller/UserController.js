//functions --> api -->behave as a controller

const getAllUsers = (req,res)=>{


        res.json({
            message:"Test API is called",
        })


}
const getUsers = (req,res)=>{


    let users = [
        {
            id:1,
            name:"amit"
        },
        {
            id:2,
            name:"sumit"
        }
    ]


    res.json({
        message:"user api called",
        data:users
    })



}

module.exports = {
    getAllUsers,
    getUsers
}