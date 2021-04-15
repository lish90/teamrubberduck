"use strict";

// Creating an angular app
var mainApp = angular.module("mainApp", []);

// Pointing out the controller for mainApp
mainApp.controller("teacherController", function($scope, $http){
    // Create teacherSearchButton which will get the data from /teacher/<teacher name>
    $scope.teacherSearchButton = function(){
        $http.get("/teacher/" + $scope.teacherSearchBox).then(function(response){
            $scope.selectedTeacher = response.data;
        });
    };

    // Create function that will update teacher information on Update button click
    $scope.teacherUpdate = function() {
        $http.put("/teachers", $scope.selectedTeacher).then(function(response) {
            // Alert user
            window.alert("Entry updated.");
        });
      };

      // Create function to create new teacher info on Create button click
    $scope.teacherCreate = function() {
        $http.post("/teachers", $scope.selectedTeacher).then(function(response) {
            // Alert user
            window.alert("Entry created.");
        });
    };
});