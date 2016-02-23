myApp.controller('addExpenseCtl', function($scope, mainService, $state, $rootScope) {

    $scope.expense = [];
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();
    $scope.expense.date = new Date();
    $scope.expense.transactionId = mainService.getexpenseTransactionId() + 1;
    $scope.expense.amount = parseFloat("0.00").toFixed(2);

    $scope.submitMyForm = function(sel_type, formdata) {
        mainService.save(sel_type, formdata);
        $rootScope.$emit('handleTotal');
        $state.go('showExpense');
    };
});
