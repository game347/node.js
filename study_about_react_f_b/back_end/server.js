import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './model/product.model.js';
import mongoose from 'mongoose';
import productRoutes from "./routes/product.route.js"

dotenv.config();
 // Ensure DB is connected before starting the server
console.log("Mongo URI:", process.env.MONGO_URI);
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); // alow us to acceptd JSON in the body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
});
