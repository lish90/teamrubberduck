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
    }
});

