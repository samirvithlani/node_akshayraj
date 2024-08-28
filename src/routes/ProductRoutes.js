const router = require('express').Router();
const productController = require('../controller/ProductController');

router.put("/updateRatings/:id",productController.addRatings)
/*
    localhost:3000/product/updateRatings/123456789
    req.body{
        rating: 4
    }

*/ 
module.exports = router;