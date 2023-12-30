const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");


const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const { error } = require("console");



mongoose.connect("//enter your db here", {
  useNewUrlParser:true,
  useUnifiedTopology:true,

}).then(() => {
    console.log("connected to Mongodb")
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});


app.listen(port, () => {
    console.log("Server is running on port 8000");
})
