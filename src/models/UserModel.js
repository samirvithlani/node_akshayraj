const mongoose = require('mongoose');
const Schema = mongoose.Schema; // db.users.find()

const userSchema = new Schema(
{
    name:{
        type: String,
    },
    age:{
        type: Number,
    },
    email:{
        type: String,
        unique: true
    },
    status:{
        type: Boolean
    },
    skills:[{
        type: String
    }],
    role:{
        type: Schema.Types.ObjectId,
        ref: 'roles'
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps: true
}
)
//db bind..
module.exports = mongoose.model('users', userSchema)

// {
//     "name":"seema",
//     "email":"seema@gmail.com",
//     "age":36,
//     "status":true,
//     "skills":["html","js","css","python"],
//     "role":"66b328cf900403e76733bd05"
// }