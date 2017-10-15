angular.module('app.controller', ['app.service'])

.controller('MyController', ['MyService', function(MyService) {
  
  console.log('controller init');
  
  MyService.callAPI().then(resp => console.log(resp));
  
}]);
