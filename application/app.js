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

app.use(express.json());

// Use static folder to server static files
app.use(express.static("static"));

// Add Endpoint for all students
app.get("/students", function(req, res) {
    // Return the data from getStudents function
    data.getStudents(function(students) {
        res.json(students);
      });
  });

// Add endpoint to update student data
app.put("/students", function(req, res) {
    // Call function on data
    data.updateStudent(req.body, function() {
      res.send("OK");
    });
  });

// Add Student Endpoint
app.get("/student/:full_name", function(req, res){
    // Get Student by Name
    data.getStudent(req.params.full_name, function(studentName){
        res.json(studentName);
    });
});

// Add Endpoint for all timetables
app.get("/timetables", function(req, res) {
  // Return the data from getTimetables function
  data.getTimetables(function(timetables) {
      res.json(timetables);
    });
});

// Add endpoint to update timetable data
app.put("/timetables", function(req, res) {
  // Call function on data
  data.updateTimetable(req.body, function() {
    res.send("OK");
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

// Add Endpoint for all teachers
app.get("/teachers", function(req, res) {
    // Return the data from getTeachers function
    data.getTeachers(function(teachers) {
        res.json(teachers);
      });
  });

// Add endpoint to update teacher data
app.put("/teachers", function(req, res) {
    // Call function on data
    data.updateTeacher(req.body, function() {
      res.send("OK");
    });
  });

// Add /teachers post endpoint
app.post("/teachers", function(req, res) {
  // Call addModule on data
  data.addTeachers(req.body, function() {
    res.send("OK");
  });
});

// Start listening the server on port localhost:3000
app.listen(3000, function(err){
    if(err) {
        console.log(err.message);
    }
    console.log("Server started.");
});