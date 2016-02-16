myApp.controller('myController', function($scope, mainService, $rootScope) {   

    init();
    $scope.orderByField = 'transactionId';
    $scope.reverseSort = false;


    function init() {
        mainService.incomeTotal = mainService.getTotal("income");
        mainService.expenseTotal = mainService.getTotal("expense");
        $scope.mainincomeTotal = mainService.incomeTotal;
        $scope.mainexpenseTotal = mainService.expenseTotal;
        $scope.mainTotal = $scope.mainincomeTotal - $scope.mainexpenseTotal;
    }

    $rootScope.$on('handleTotal', function(event, args) {
    	init();
    });
});
