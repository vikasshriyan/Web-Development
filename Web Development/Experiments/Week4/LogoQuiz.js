var app=angular.module("logoQuiz",[])

app.controller("LogoController", function ($scope) {
    $scope.answer = "";

    $scope.realmadrid = function () {
        $scope.answer = "Real Madrid";

    };
    $scope.manunited = function () {
        $scope.answer = "Manchester United";

    };
    $scope.arsenal = function () {
        $scope.answer = "Arsenal";

    };
    $scope.asroma = function () {
        $scope.answer = "AS Roma";

    };
    $scope.atm = function () {
        $scope.answer = "Athletico Madrid";

    };
    $scope.barcelona = function () {
        $scope.answer = "Barcelona";

    };
    $scope.liverpool = function () {
        $scope.answer = "Liverpool";

    };
    $scope.mancity = function () {
        $scope.answer = "Manchester City";

    };
});