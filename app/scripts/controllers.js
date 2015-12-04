'use strict';

angular.module('app.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  // Logout
  $scope.doLogout = function() {
    // Remover tokens
    window.localStorage.removeItem('token_type');
    window.localStorage.removeItem('token_value');
    $state.go('app.login');
  };

  // Profile
  $scope.doProfile = function() {
    // Se não tem token, vai para o login
    var token_value = window.localStorage.getItem('token_value');
    var token_type = window.localStorage.getItem('token_type');
    if (!token_value || !token_type) {
      $state.go('app.login');
    } else {
      $state.go('app.profile');
    }
  };
})

.controller('ProfileCtrl', function($scope, $state, UserFactory) {
  var profile = UserFactory.get(
      {access_token: window.localStorage.getItem('token_value')},
      function() {
        // Form data
        $scope.profileData = angular.fromJson(profile);
        window.console.log($scope.profileData);
      }
  );
})

// .controller('LoginCtrl', function($scope, $state, $cordovaOauth, AuthLocalFactory, AuthFacebookFactory, AuthGoogleFactory) {
.controller('LoginCtrl', function($scope, $state, $cordovaOauth, AuthLocalFactory) {

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

  // Login facebook
  $scope.doLoginFacebook = function() {
    // Se sucesso, salvar tokens e ir pro profile
    // AuthFacebookFactory.save(
    //   $scope.loginData,
    //   function(response) {
    //     var auth_token = angular.fromJson(response).token;
    //     window.localStorage.setItem('token_value',auth_token);
    //     window.localStorage.setItem('token_type','local');
    //     $state.go('app.profile');
    //   },
    //   function(response) {
    //     var data = angular.fromJson(response).data;
    //     window.alert('Um erro ocorreu: ' + data.message);
    //   }
    // );
    window.alert('A implementar');
  };

  // Login google
  $scope.doLoginGoogle = function() {
    // Se sucesso, salvar tokens e ir pro profile
    // AuthGoogleFactory.query(
    //   $scope.loginData,
    //   function(response) {
    //     var auth_token = angular.fromJson(response).token;
    //     window.localStorage.setItem('token_value',auth_token);
    //     window.localStorage.setItem('token_type','local');
    //     $state.go('app.profile');
    //   },
    //   function(response) {
    //     var data = angular.fromJson(response).data;
    //     window.alert('Um erro ocorreu: ' + data.message);
    //   }
    // );

    $cordovaOauth.google("867500845097-qf8t1n74r52ep6p9o59pi03bqpd5e6a1.apps.googleusercontent.com", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function(response) {
        var auth_token = angular.fromJson(response).access_token;
        window.localStorage.setItem('token_value',auth_token);
        window.localStorage.setItem('token_type','google');
        $state.go('app.profile');
    }, function(error) {
        console.log(error);
    });

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
