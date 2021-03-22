// Use strict mode
"use strict";

// Import student.js
const student = require("../student.js");

// Import data.js
const data = require("../data/data.js");

// Import the express library
const express = require("express");

// Create express app instance
const app = express();

// Use static folder to server static files
app.use(express.static("static"));

// Add Student Endpoint
app.get("/student/:id", function(req, res){
    // Get Student by ID
    data.getStudent(req.params.id, function(module){
        res.json(module);
    });
});

// Add Timetable Endpoint
app.get("/timetable/:class_id", function(req, res){
    // Get Timetable by Class ID
    res.send("Timetable " + req.params.class_id);
});

// Add Teacher Endpoint
app.get("/teacher/:id", function(req, res){
    // Get Teacher by ID
    res.send("Teacher " + req.params.id);
});

// Start listening the server on port localhost:3000
app.listen(3000, function(err){
    if(err) {
        console.log(err.message);
    }
    console.log("Server started.");
});