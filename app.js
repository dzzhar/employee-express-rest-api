// import express and router
const express = require("express");
const router = require("./routes/api.js");

// create an object express
const app = express();

// use JSON middleware
app.use(express.json());

// use router
app.use(router);

// define port
app.listen(3000);
