angular.module('app.service', [])

.service('MyService', ['$http', function($http) {

  
  function callAPI() {
    return $http.get('/api/');
  };
  
  
  return {
    callAPI
  }
  
}]);