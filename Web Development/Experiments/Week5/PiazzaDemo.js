var app = angular.module("piazza", ['ngRoute'])

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'piazza/home.html',
     //       controller: 'PhoneListCtrl'
        }).
        when('/profile/:username', {
            templateUrl: 'piazza/profile.html',
            controller: 'ProfileCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);

app.controller("navController", function ($scope, UserService) {
    $scope.currentUser = null;
    $scope.logout = function()
    {
        $scope.currentUser = null;
        UserService.logout();
       $scope.username = null;
        $scope.password = null;
    }
     $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;
        $scope.currentUser =  UserService.login(username, password);
    }
});

app.controller("ProfileCtrl", function ($scope, UserService, $routeParams, CourseService) {
    var username = $routeParams.username;
    $scope.username = username;
    $scope.currentUser = UserService.getCurrentUser();
    if($scope.currentUser.role=="faculty")
    {
        $scope.authoring = CourseService.getCourseByIndices($scope.currentUser.authoring);
        $scope.teaching = CourseService.getCourseByIndices($scope.currentUser.teaching);

    }

    if ($scope.currentUser.role == "student") {
        $scope.registered = CourseService.getCourseByIndices($scope.currentUser.registered);

    }
});

