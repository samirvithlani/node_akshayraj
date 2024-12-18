const router = require('express').Router();
const productController = require('../controller/ProductController');
const prodController = require("../controller/ProdController")

router.put("/updateRatings/:id",productController.addRatings)
/*
    localhost:3000/product/updateRatings/123456789
    req.body{
        rating: 4
    }

*/ 
router.post("/add",prodController.addProduct)
module.exports = router;