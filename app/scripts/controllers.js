'use strict';

angular.module('app.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  // Logout
  $scope.doLogout = function() {
    // Remover tokens
    window.localStorage.removeItem('token_type');
    window.localStorage.removeItem('token_value');
    window.localStorage.removeItem('profile');
    $state.go('app.login');
  };

  // Profile
  $scope.doProfile = function() {
    // Se não tem token, vai para o login
    if (!window.localStorage.getItem('token_type') || !window.localStorage.getItem('token_value')) {
      $state.go('app.login');
    } else {
      // Busca o profile
      $state.go('app.profile');
    }
  };
})

.controller('ProfileCtrl', function($scope, $state) {
  // Form data
  $scope.profileData = window.localStorage.getItem('profile');
  window.console.log($scope.profileData);
})

.controller('LoginCtrl', function($scope, $state, AuthLocalFactory) {

  // Form data
  $scope.loginData = {};

  // Placeholders
  $scope.emailPlaceholder = 'Digite seu e-mail';
  $scope.passwordPlaceholder = 'Digite sua senha';

  // Login
  $scope.doLogin = function() {
    // Se sucesso, salvar tokens e ir pro profile
    AuthLocalFactory.save(
      $scope.loginData,
      function(response) {
        var auth_token = angular.fromJson(response).token;
        window.localStorage.setItem('token_value',auth_token);
        window.localStorage.setItem('token_type','local');
        $state.go('app.profile');
      },
      function(response) {
        var data = angular.fromJson(response).data;
        window.alert('Um erro ocorreu: ' + data.message);
      }
    );
  };

})

.controller('SignupCtrl', function($scope, $state, UserFactory) {

  // Form data
  $scope.signupData = {};

  // Placeholders
  $scope.namePlaceholder = 'Digite seu nome completo';
  $scope.emailPlaceholder = 'Digite seu e-mail';
  $scope.passwordPlaceholder = 'Digite sua senha';

  // Login
  $scope.doSignup = function() {
    UserFactory.save(
      $scope.signupData,
      function(response) {
        var auth_token = angular.fromJson(response).token;
        window.localStorage.setItem('token_value',auth_token);
        window.localStorage.setItem('token_type','local');
        $state.go('app.profile');
      },
      function(response) {
        var data = angular.fromJson(response).data;
        window.alert('Um erro ocorreu: ' + data.message);
      }
    );
  };

});
