'use strict';
var myApp = angular.module("expenseManager", ['angularValidator', 'ui.router', 'angular.filter', 'ngAnimate']);

//***********Initialize config value******************************************************//  
myApp.value('config', {
    notifiyMsg: 'No Notification...',
    orderby: 'transactionId',
    sortChk: false,
    currDate: new Date()
});

//***********Initialize custom directive**************************************************//
myApp.directive('myNotificationScope', function() {
    return {
        restrict: 'EA',
        templateUrl: 'view/notification.html',
        replace: true
    };
});
//***********End custom directive*******************************************************//
