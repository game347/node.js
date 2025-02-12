import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();
connectDB(); // Ensure DB is connected before starting the server

const app = express();

app.get("/", (req, res) => {
    res.send("ready");
});

console.log("Mongo URI:", process.env.MONGO_URI);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
