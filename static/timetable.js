"use strict";

// Creating an angular app
var mainApp = angular.module("mainApp", []);

// Pointing out the controller for mainApp
mainApp.controller("timetableController", function($scope, $http){
    // Create timetableSearchButton which will get the data from /timetable/<subject>
    $scope.timetableSearchButton = function(){
        $http.get("/timetable/" + $scope.timetableSearchBox).then(function(response){
            $scope.selectedTimetable = response.data;
        });
    }
});