var app = angular.module("DeveloperApp", []);


app.controller("DeveloperController", function ($scope, $http) {
    $http.get("/developer")
    .success(function (response) {
        $scope.developers = response;
    });

    $scope.remove = function (index) {
        developer = $scope.developers[index];

        $http.delete("/developer/" + developer._id)
        .success(function (response) {
            $scope.developers = response;
        });
    };

    $scope.add = function (developer) {
        console.log(developer);
        $http.post("/developer", developer)
   .success(function (response) {
       $scope.developers = response;
      });
    };

    $scope.selectedIndex = null;
    $scope.select = function (index)
    {
        $scope.selectedIndex = index;
        $scope.developer = $scope.developers[index];

    }

    $scope.update = function (developer) {
        $http.put("/developer/" + $scope.selectedIndex, developer)
        .success(function (response) {
            $scope.developers = response;
        });
    }
});
