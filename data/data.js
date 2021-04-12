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

// Create fuction to run query on database and get student information
exports.getStudents = function(callback) {
    // SQL Statement to get all students
    var sql = `SELECT * FROM Student`;
    // Execute the query
    db.all(sql, function(err, rows) {
        // Check for errors
        if (err) {
            return console.error(err.message);
        }
        // Create an array or students
        var students = [];
        // Loop through the data
        for (var row of rows) {
            var stud = new student.Student(row.Student_ID, row.Student_Name, row.Date_of_Birth, row.Gender);
            // Add the student to the array
            students.push(stud);
        }
        // Execute callback function
        callback(students);
    });
};

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
};

// Create function to run query and update student information
exports.updateStudent = function(student, callback) {
    // Create SQL update statement
    var sql = `UPDATE Student 
    SET Student_ID=${student.id},
    Student_Name="${student.full_name}",
    Date_of_Birth="${student.dob}",
    Gender="${student.gender}"
    WHERE Student_ID=${student.id}`;
    // Execute SQL update statement
    db.exec(sql, function(err) {
      // Once completed, execute callback function
      callback();
    });
  };

// Create fuction to run query on database and get teacher information
exports.getTeachers = function(callback) {
    // SQL Statement to get all teachers
    var sql = `SELECT * FROM Teacher`;
    // Execute the query
    db.all(sql, function(err, rows) {
        // Check for errors
        if (err) {
            return console.error(err.message);
        }
        // Create an array or teachers
        var teachers = [];
        // Loop through the data
        for (var row of rows) {
            var teach = new student.Teacher(row.Teacher_ID, row.Teacher_Name, row.Subject, row.Years_Served, row.Salary, row.Street_Address, row.Postal_Code, row.Contact_Number);
            // Add the student to the array
            teachers.push(teach);
        }
        // Execute callback function
        callback(teachers);
    });
};

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
};

// Create function to run query and update student information
exports.updateTeacher = function(teacher, callback) {
    // Create SQL update statement
    var sql = `UPDATE Teacher 
    SET Teacher_ID="${teacher.id}",
    Teacher_Name="${teacher.full_name}",
    Subject="${teacher.teacher_subject}",
    Years_Served=${teacher.years_served},
    Salary=${teacher.salary}, 
    Street_Address="${teacher.address}",
    Postal_Code="${teacher.postal}",
    Contact_Number="${teacher.number}"
    WHERE Teacher_ID="${teacher.id}"`;
    // Execute SQL update statement
    db.exec(sql, function(err) {
      // Once completed, execute callback function
      callback();
    });
  };

// Create fuction to run query on database and get timetable information
exports.getTimetables = function(callback) {
    // SQL Statement to get all timetables
    var sql = `SELECT * FROM Timetable`;
    // Execute the query
    db.all(sql, function(err, rows) {
        // Check for errors
        if (err) {
            return console.error(err.message);
        }
        // Create an array or students
        var timetables = [];
        // Loop through the data
        for (var row of rows) {
            var timetab = new student.Timetable(row.Class_ID, row.Teacher_ID, row.Subject, row.Room_Number, row.Day, row.Time);
            // Add the student to the array
            timetables.push(timetab);
        }
        // Execute callback function
        callback(timetables);
    });
};

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
};

// Create function to run query and update timetable information
exports.updateTimetable = function(timetable, callback) {
    // Create SQL update statement
    var sql = `UPDATE Timetable 
    SET Class_ID="${timetable.class_id}",
    Teacher_ID="${timetable.teacher_id}",
    Subject="${timetable.subject}",
    Room_Number="${timetable.room_number}",
    Day="${timetable.day}",
    Time="${timetable.time}"
    WHERE Class_ID="${timetable.class_id}"`;
    // Execute SQL update statement
    db.exec(sql, function(err) {
      // Once completed, execute callback function
      callback();
    });
  };
