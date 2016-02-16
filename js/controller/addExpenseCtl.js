myApp.controller('addExpenseCtl', function($scope, mainService, $state, $rootScope) {

    $scope.expense = [];
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();
    $scope.expense.date = new Date();
    $scope.expense.transactionId = mainService.getexpenseTransactionId() + 1;

    $scope.submitMyForm = function(formdata, sel_type) {
        mainService.save(formdata, sel_type);
        $rootScope.$emit('handleTotal');
        $state.go('showExpense');
    };
});
