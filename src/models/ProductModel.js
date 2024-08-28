const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

    name:{
        type: String,
        required: true,
        unique: true
    },
    
    price:{
        type: Number,
        required: true
    },
    isAvailable:{
        type: Boolean,
        default: true
    },
    colors:[
        {
            type: String
        }
    ],
    ratings:[
        {
            type: Number
        }
    ],
    subcategory:{
        type: Schema.Types.ObjectId,
        ref: 'Subcategory',
        required: true
    },
    description:{
        type: String
    },


})
module.exports = mongoose.model('Product', productSchema);