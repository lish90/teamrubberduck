// Use Strict Mode
"use strict";

// Import sqlite3
const sqlite3 = require("sqlite3").verbose();

// Import student class file
const student = require("../student");

// Create new database instance
var db = new sqlite3.Database("school2.db", function(err){
    // If there is any error
    if (err) {
        console.log(err.message);
    }
    // Connection message
    console.log("Connected to Database");
});