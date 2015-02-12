var app = angular.module("demoController", [])

app.controller("Controller",
function ($scope) {
    var student = {
        first: "",
        last : "",
    };

    $scope.student = student;

    console.log("Hello World");
});