const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const multer = require("multer");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//connection to database
mongoose.connect("mongodb+srv://nafeesathulmisriya52:qlZ9QXH969IorP7p@cluster0.9plxhtj.mongodb.net/e-commerce")

//API  creation
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

// image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });

// creating upload endpoint for images
app.use('/images', express.static ('upload/images')); 

app.post("/upload", upload.single('image'), (req, res) => {
    
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// // Schema for creating product
// const product = mongoose.model("Product",{
//     id:{
//         type:Number,
//         required:true,
//     },
//     name:{
//         type:String,
//         required:true,
//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     category:{
//         type:String,
//         required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     available:{
//         type:Boolean,
//         default:true
//     }
// })
// app.post('/addproduct',async(req,res)=>{
//     let products = await Product.find({});
//     let id;
//     if(products.length>0)
//         {
//             let last_product_array = products.slice(-1);
//             let last_product = last_product_array[0];
//             id = last_product.id+1;
//         }
//     else{
//             id = 1;
//         }
//      const product = new product({
//         id:req.body.id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,
//      })
//      console.log(product);
//      await product.save();
//      console.log("Saved");
//      res.json({
//         response:true,
//         name:req.body.name,
//      })
// })

// Schema for creating product
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true
    }
});

app.post('/addproduct', async (req, res) => {
    try {
        const productsCount = await Product.countDocuments({});
        const newProduct = new Product({
            id: productsCount + 1, // Increment the count for generating the next ID
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        console.log(newProduct);
        await newProduct.save();
        console.log("Saved");
        res.json({
            success: true,
            product: newProduct,
        });
    } catch (err) {
        console.error("Error saving product:", err);
        res.status(500).json({
            success: false,
            error: "Error saving product",
        });
    }
});
//**************************************************************************************//

//creating api for deleting product
app.post('/removeproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log("Deleted");
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, error: "Error deleting product" });
    }
});

//creating api for getting all products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products);
})


app.listen(port,(error)=>{
    if (!error) {
        console.log("Server is Running on Port "+port)
    }
    else{
        console.log("Error" +error)
    }
}) 







