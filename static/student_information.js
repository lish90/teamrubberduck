"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("studentController", function($scope, $http){
    $scope.studentSearchButton = function(){
        $http.get("/student/" + $scope.studentSearchBox).then(function(response){
            $scope.selectedStudent = response.data;
        });
    }
});

