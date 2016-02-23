myApp.controller('addIncomeCtl', function($scope, mainService, $state, $rootScope) {

    $scope.income = [];
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();
    $scope.income.date = new Date();
    $scope.income.transactionId = mainService.getincomeTransactionId() + 1;
    $scope.income.amount = parseFloat("0.00").toFixed(2);

    $scope.submitMyForm = function(sel_type, formdata) {
        mainService.save(sel_type,formdata);
        $rootScope.$emit('handleTotal');
        $state.go('showIncome');
    };
});
