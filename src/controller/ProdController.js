const multer = require("multer")
const cloudanryUpload = require("../util/CloudanryUpload")

const storage = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage:storage,
    //fileFilers..
}).single("productImage")

const addProduct = async(req,res)=>{

    upload(req,res,async(err)=>{
        if(err){
            res.status(500).json({
                message:"product not added"
            })
        }
        else{
            const cloundanryUrl = await cloudanryUpload.uploadFile(req.file.path)
            console.log(cloundanryUrl.secure_url)
            //db store...
            console.log(req.body)
            //productSchema.create
            res.send("ok")
        }
    })

}

module.exports = {
    addProduct
}

