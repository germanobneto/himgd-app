angular.module('app.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $cordovaOauth) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  $scope.GOOGLE_CLIENT_ID = "583440328908-28f5v7cvu4d4auephajmqf9lkf7grea6.apps.googleusercontent.com";

  $scope.doLogout = function() {

  };

  $scope.doLogin = function() {
    // $cordovaOauth.google(string clientId, array appScope, object options);
    $cordovaOauth.google($scope.GOOGLE_CLIENT_ID, ["email"]).then(function(result) {
      window.alert("Response Object -> " + JSON.stringify(result));
    }, function(error) {
      window.alert("Error -> " + error);
    });
  };

  $scope.doSignup = function() {
  };

})

.controller('LoginCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
