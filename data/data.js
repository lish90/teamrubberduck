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

// create the function which extracts data from database and makes a new Student instance
exports.getStudent = function(full_name, callback){
    var sql = `SELECT * FROM Student WHERE Student_Name="${full_name}"`;
    db.get(sql, function(err, row){
        if (err){
            console.log(err.message);
        }
        var newStudent = new student.Student(row.Student_ID, row.Student_Name, row.Date_of_Birth, row.Gender);
        callback(newStudent);
    });
}

// create the function which extracts data from database and makes a new Teacher instance
exports.getTeacher = function(teacher_name, callback){
    var sql = `SELECT * FROM Teacher WHERE Teacher_Name="${teacher_name}"`;
    db.get(sql, function(err, row){
        if (err){
            console.log(err.message);
        }
        var newTeacher = new student.Teacher(row.Teacher_ID, row.Teacher_Name, row.Subject, row.Years_Served, row.Salary, row.Street_Address, row.Postal_Code, row.Contact_Number);
        callback(newTeacher);
    });
}

// create the function which extracts data from database and makes a new Timetable instance
exports.getTimetable = function(subject, callback){
    var sql = `SELECT * FROM Timetable WHERE Subject="${subject}"`;
    db.get(sql, function(err, row){
        if (err){
            console.log(err.message);
        }
        var newTimetable = new student.Timetable(row.Class_ID, row.Teacher_ID, row.Subject, row.Room_Number, row.Day, row.Time);
        callback(newTimetable);
    });
}

