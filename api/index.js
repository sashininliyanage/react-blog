const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/category');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB"))
.catch((error) => console.log(error));

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/category ",categoryRoute);
    
app.listen("5000",()=>{
    console.log("Backend is running")
})