"use strict";

// Creating an angular app
var mainApp = angular.module("mainApp", []);

// Pointing out the controller for mainApp
mainApp.controller("studentController", function($scope, $http){
    // Create studentSearchButton which will get the data from /student/<student name>
    $scope.studentSearchButton = function(){
        $http.get("/student/" + $scope.studentSearchBox).then(function(response){
            $scope.selectedStudent = response.data;
        });
    };

    // Create function that will update student information on Update button click
    $scope.studentUpdate = function() {
        $http.put("/students", $scope.selectedStudent).then(function(response) {
            // Alert user
            window.alert("Entry updated.");
        });
      };
    // Create function to create new student info on Create button click
    $scope.studentCreate = function() {
        $http.post("/student", $scope.selectedStudent).then(function(response) {
            // Alert user
            window.alert("Entry created.");
        });
    };
});

