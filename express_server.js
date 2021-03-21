// import express libary 
const express = require("express");

// create express app 
let app = express();

//  create get for root 
app.get("/", function(req,res){
    res.send("Hello World!");
});

// start server on port 300
app.listenerCount(3000);