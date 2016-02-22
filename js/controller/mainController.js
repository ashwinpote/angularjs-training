myApp.controller('myController', function($scope, mainService, $rootScope) {

    $scope.orderByField = 'transactionId';
    $scope.reverseSort = false;
    $scope.notificationMsg = "No Notification...";

    //***********Start function for income/expense data load from json************** 
    mainService.getincomejson().then(function(data) {
        mainService.incomesData = data;
    });

    mainService.getexpensejson().then(function(data) {
        mainService.expenseData = data;
    });
    //***********End function******************************************************* 

    function initTotal() {
        mainService.incomeTotal = mainService.getTotal("income");
        mainService.expenseTotal = mainService.getTotal("expense");
        $scope.mainincomeTotal = mainService.incomeTotal;
        $scope.mainexpenseTotal = mainService.expenseTotal;
        $scope.mainTotal = $scope.mainincomeTotal - $scope.mainexpenseTotal;
    }

    $rootScope.$on('handleTotal', function(event, args) {
        initTotal();
    });

    $rootScope.$on('handlenotify', function(event, args) {
        $scope.notificationMsg = args;
    });
});
