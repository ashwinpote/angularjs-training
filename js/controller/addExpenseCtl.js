myApp.controller('addExpenseCtl', function($scope, mainService, $state, $rootScope, config) {

    //***********Initialize*****************************************//
    $scope.expense = [];
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();
    $scope.expense.date = config.currDate;
    $scope.expense.transactionId = mainService.getexpenseTransactionId();

    //***********For expense add new data***************************// 
    $scope.addExpense = function(formdata) {
        mainService.save("expense", formdata);
        $rootScope.$emit('handleTotal');
        $state.go('showExpense');
    };
    //***********End function**************************************//
});
