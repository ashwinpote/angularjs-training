angular.module('myapp', []).controller('MyCtrl', ['$scope', function($scope) {
    $scope.orderByField = 'transactionId';
    $scope.reverseSort = false;
    $scope.notificationMsg = "No Notification...";

    //***********For income/expense data load from json***************************// 
    mainService.getincomejson().then(function(data) {
        mainService.incomesData = data;
    });

    mainService.getexpensejson().then(function(data) {
        mainService.expenseData = data;
    });
    //***********End function*******************************************************//

    //***********For income/expense calculate totals *******************************// 
    function initTotal() {
        mainService.incomeTotal = mainService.getTotal("income");
        mainService.expenseTotal = mainService.getTotal("expense");
        $scope.mainincomeTotal = parseFloat(mainService.incomeTotal).toFixed(2);
        $scope.mainexpenseTotal = parseFloat(mainService.expenseTotal).toFixed(2);
        $scope.mainTotal = parseFloat($scope.mainincomeTotal - $scope.mainexpenseTotal).toFixed(2);
    }
    //***********End function*******************************************************//

    //***********For calculate totals from child scope *****************************// 
    $rootScope.$on('handleTotal', function(event, args) {
        initTotal();
    });
    //***********End function*******************************************************//

    //***********For notification from child scope *********************************// 
    $rootScope.$on('handlenotify', function(event, args) {
        $scope.notificationMsg = args;
    });
    //***********End function*******************************************************//
}]);
