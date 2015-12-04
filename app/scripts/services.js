'use strict';

angular.module('app.services', ['ngResource'])

.factory('UserFactory', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + '/api/users/me');
})

.factory('AuthLocalFactory', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + '/auth/local');
})

.factory('AuthFacebookFactory', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + '/auth/facebook');
})

.factory('AuthGoogleFactory', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + '/auth/google');
});
