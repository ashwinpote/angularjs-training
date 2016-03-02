myApp.controller('myExpMgr', function($scope, mainService, $rootScope, config) {

    //***********Initialize******************************************************//    
    $scope.orderByField = config.orderby;
    $scope.reverseSort = config.sortChk;
    $scope.notificationMsg = config.notifiyMsg;

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
        $scope.mainincomeTotal = mainService.castAmount(mainService.incomeTotal);
        $scope.mainexpenseTotal = mainService.castAmount(mainService.expenseTotal);
        $scope.mainTotal = mainService.castAmount($scope.mainincomeTotal - $scope.mainexpenseTotal);
    }
    //***********End function*******************************************************//

    //***********call calculate totals from child controller scope *****************// 
    $rootScope.$on('handleTotal', function(event, args) {
        initTotal();
    });
    //***********End function*******************************************************//

    //***********call notification from child controller scope *********************// 
    $rootScope.$on('handlenotify', function(event, args) {
        $scope.notificationMsg = args;
    });
    //***********End function*******************************************************//
});
