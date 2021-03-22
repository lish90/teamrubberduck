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
app.get("/student/:full_name", function(req, res){
    // Get Student by Name
    data.getStudent(req.params.full_name, function(studentName){
        res.json(studentName);
    });
});

// Add Timetable Endpoint
app.get("/timetable/:subject", function(req, res){
    // Get Timetable by Subject
    data.getTimetable(req.params.subject, function(subject){
        res.json(subject);
    });
});

// Add Teacher Endpoint
app.get("/teacher/:teacher_name", function(req, res){
    // Get Teacher by Name
    data.getTeacher(req.params.teacher_name, function(teacherName){
        res.json(teacherName);
    });
});

// Start listening the server on port localhost:3000
app.listen(3000, function(err){
    if(err) {
        console.log(err.message);
    }
    console.log("Server started.");
});