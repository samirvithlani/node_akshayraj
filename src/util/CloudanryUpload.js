const cloudanry = require('cloudinary').v2;

const uploadFile = async(file)=>{

    cloudanry.config({
        cloud_name: 'dpjoxqisl',
        api_key:"292199526794599",
        api_secret: 'add your'
    })
    return await cloudanry.uploader.upload(file);

}
module.exports = {uploadFile};