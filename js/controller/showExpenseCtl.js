myApp.controller('showExpenseCtl', function($scope, mainService, $rootScope) {

    //***********Initialize******************************************************//
    $scope.expense = mainService.expenseData;
    $scope.expenseTotal = mainService.castAmount(mainService.expenseTotal);
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();
    $rootScope.$emit('handleTotal');

    //***********Update service index*******************************************//
    $scope.edit = function(index) {
        mainService.itemIndex = index;
    };
    //***********End function***************************************************//

    //***********For delete expense**********************************************//
    $scope.delete = function(index) {
        mainService.delete("expense", index);
        $rootScope.$emit('handleTotal');
        $scope.expenseTotal = mainService.getTotal("expense");
    };
    //***********End function***************************************************//
});
