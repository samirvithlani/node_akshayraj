const multer = require("multer");
const cloudanryUploader = require("../util/CloudanryUpload");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .jpg and .png format allowed!"));
    }
  },
}).single("file");

const uploadFile = async(req, res) => {
  upload(req, res, async(err) => {
    if (err) {
      res.status(500).json({ message: err });
    } else {

        const cres = await cloudanryUploader.uploadFile(req.file.path);
        console.log(cres);
        res.status(200).json({ message: "File uploaded successfully", file: cres });


    //   res
    //     .status(200)
    //     .json({ message: "File uploaded successfully", file: req.file });
    }
  });
};


module.exports = { uploadFile };