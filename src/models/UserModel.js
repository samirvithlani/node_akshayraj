const mongoose = require('mongoose');
const Schema = mongoose.Schema; // db.users.find()

const userSchema = new Schema({
    name:{
        type: String,
    },
    age:{
        type: Number,
    },
    email:{
        type: String,
    },
    status:{
        type: Boolean
    }
})
//db bind..
module.exports = mongoose.model('users', userSchema)