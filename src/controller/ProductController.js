const productSchema = require('../models/ProductModel');
const addProduct = async (req, res) => {
    //add product
}
const getProducts = async (req, res) => {

    //get all products

    const products = await productSchema.find().populate('subcategory').populate({
      path: 'subcategory',
        populate: {
            path: 'category',
            model: 'Category'
        }  
    })

}

const addRatings = async (req, res) => {
    //add review
    //product
    //rating // push...

    const productId=  req.params.id
    const ratings = req.body.rating
    const addRatings = await productSchema.findOneAndUpdate(productId,{
        $push:{
            ratings: ratings
        }
    },{new:true})


}

module.exports = {
    addProduct,
    getProducts,
    addRatings
}