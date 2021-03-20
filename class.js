// Use strict mode
"use strict";

// Student class
exports.Student = class {
    // Student ID
    id;
    //Student Full Name
    full_name;
    //Student Date of Birth
    dob;
    //Student Gender
    gender;
    // Constructor for Student Class
    constructor (id, full_name, dob, gender){
        this.id = id;
        this.full_name = full_name;
        this.dob = dob;
        this.gender = gender;
    }
}

// Timetable class
exports.Timetable = class {
    // Class ID
    class_id;
    // Teacher ID
    teacher_id;
    // Subject
    subject;
    // Room Number of Class
    room_number;
    // Day of class
    day;
    // Time of class
    time;
    // Constructor for Timetable Class
    constructor (class_id, teacher_id, subject, room_number, day, time){
        this.class_id = class_id;
        this.teacher_id = teacher_id;
        this.subject = subject;
        this.room_number = room_number;
        this.day = day;
        this.time = time;
    }
}

exports.Teacher = class {
    // Teacher ID
    id;
    // Teacher Full Name
    full_name;
    // Teacher Subject
    teacher_subject;
    // Teacher Year Served in School
    years_served;
    // Teacher Salary
    salary;
    // Teacher Address
    address;
    // Teacher Postal Code
    postal;
    // Teacher Phone Number
    number;
    // Constructor for Teacher Class
    constructor (id, full_name, teacher_subject, years_served, salary, address, postal, number){
        this.id = id;
        this.full_name = full_name;
        this.teacher_subject = teacher_subject;
        this.years_served = years_served;
        this.salary = salary;
        this.address = address;
        this.postal = postal;
        this.number = number;
    }
}