import dotenv from "dotenv";
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require("../server/routes/auth.js")
const morgan = require("morgan");

const app = express();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log("DB connection error: ", err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("dev"));

app.use("/api",authRoutes);

app.listen(8080, ()=> console.log("Server running on port 8080"));