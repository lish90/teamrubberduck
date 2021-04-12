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
    };

    // Create function that will update timetable information on Update button click
    $scope.timetableUpdate = function() {
        $http.put("/timetables", $scope.selectedTimetable).then(function(response) {
            // Alert user
            window.alert("Entry updated.");
        });
    };

});