import express from 'express';
const router = express.Router();
//import products from '../data/products.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

router.get('/', 
asyncHandler(async(req, res) => { //route for all products
    const products = await Product.find({});
    res.json(products);
   }));

router.get(
    '/:id', 
    asyncHandler(async(req, res) => { //route for single product
    const product = await Product.findById(req.params.id);

   if (product)
   {
   return res.json(product);
   }

   res.status(404).json({message:'product not found'});
}));

   export default router;