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
    }
});