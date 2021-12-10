const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB"))
.catch((error) => console.log(error));

app.use(express.json());
app.use("/api/auth",authRoute);
    
app.listen("5000",()=>{
    console.log("Backend is running")
})