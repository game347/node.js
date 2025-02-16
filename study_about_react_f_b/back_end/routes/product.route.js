import express from "express";
import Product from "../model/product.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products});
    } catch (error) {
            console.log('error in fetching products:',error.message);
            res.status(500).json({ success: false, message:"Sever Error"});
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false, message: "Invalid Product ID" });
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({ success: true, data: updateProduct});
    } catch (error) {
        console.log('error in update products:',error.message);
        res.status(500).json({ success: false, message: "sever Error"});
    }
});


router.post("/", async (req, res) => {
    const products = req.body; 
 
    if (!products.name || !products.price || !products.image) {
       return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
 
    const newProduct = new Product(products);
 
    try {
       await newProduct.save();
       res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
       console.error("Error in create product:", error.message);
       res.status(500).json({ success: false, message: "Server error" });
    }
 });
 

router.delete("/:id", async (req, res) => {
    const {id} = req.params

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product delete"});
    } catch (error) {
        console.log('error in deleteing products:',error.message);
        res.status(404).json({ success: false, message: "Product not found"});
    }
    console.log("id:",id)
});
 

export default router;