const mongoose = require('mongoose');
const Schema = mongoose.Schema; // db.roles.find()

const roleModel = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        //tolowercase: true,
        tolowercase:true,
        trim:true
    },
    description:{
        type: String
    }
},{
    timestamps: true
})
module.exports = mongoose.model('roles', roleModel)