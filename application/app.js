// Use strict mode
"use strict";

// Import the express library
const express = require("express");

// Create express app instance
const app = express();

// Use static folder to server static files
app.use(express.static("static"));



// Start listening the server on port localhost:3000
app.listen(3000, function(err){
    if(err) {
        console.log(err.message);
    }
    console.log("Server started.");
});