// Use Strict Mode
"use strict";

// Import sqlite3
const sqlite3 = require("sqlite3").verbose();

// Import student class file
const student = require("../student");

// Create new database instance
var db = new sqlite3.Database("data/school2.db", function(err){
    // If there is any error
    if (err) {
        console.log(err.message);
    }
    // Connection message
    console.log("Connected to Database");
});

exports.getStudent = function(id, callback){
    var sql = `SELECT * FROM Student WHERE Student_ID=${id}`;
    db.get(sql, function(err, row){
        if (err){
            console.log(err.message);
        }
        var newStudent = new student.Student(row.Student_ID, row.Student_Name, row.Date_of_Birth, row.Gender);
        callback(newStudent);
    });
}