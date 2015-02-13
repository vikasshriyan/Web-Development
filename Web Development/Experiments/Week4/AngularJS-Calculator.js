var app = angular.module("cal",[])


app.controller("calculatorController", function ($scope) {



    $scope.add = function () {
        var n1 = $scope.firstNumber;
        var n2 = $scope.secondNumber;
        $scope.output = parseInt(n1) + parseInt(n2);
    }

    $scope.subtract = function () {
        var n1 = $scope.firstNumber;
        var n2 = $scope.secondNumber;
        $scope.output = parseInt(n1) - parseInt(n2);
    }

    $scope.divide = function () {
        var n1 = $scope.firstNumber;
        var n2 = $scope.secondNumber;
        $scope.output = parseInt(n1) / parseInt(n2);
    }

    $scope.multiply = function () {
        var n1 = $scope.firstNumber;
        var n2 = $scope.secondNumber;
        $scope.output = parseInt(n1) * parseInt(n2);
    }



});