var myapp = angular.module('myapp', []);

myapp.controller('MyCtrl', function($scope) {
    $scope.orderByField = 'transactionId';
    $scope.reverseSort = false;
    $scope.notificationMsg = "No Notification...";
    $scope.date = new Date();
    
});
