var app = angular.module("movieApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'routing/home.html',
            controller: 'HomeCtrl'
        }).
        when('/profile', {
            templateUrl: 'routing/profile.html',
            controller: 'ProfileCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);

app.controller("HomeCtrl", function ($scope, MovieService) {
    $scope.searchMovies = function () {
       MovieService.searchMovies($scope.searchByTitle, function(response){
           $scope.movies = response;
    });
    }

    $scope.addToFavorites = function(movie)
    {
        MovieService.addToFavorites(movie);
    }
});


app.controller("ProfileCtrl", function ($scope, MovieService) {
    var favorites = MovieService.getFavorites();
    console.log(favorites);
    $scope.favoriteMovies = favorites;
});