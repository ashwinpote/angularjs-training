myApp.controller('addIncomeCtl', function($scope, mainService, $state, $rootScope) {

    $scope.income = [];
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();
    $scope.income.date = new Date();
    $scope.income.transactionId = mainService.getincomeTransactionId() + 1;

    $scope.submitMyForm = function(formdata, sel_type) {
        mainService.save(formdata, sel_type);
        $rootScope.$emit('handleTotal');
        $state.go('showIncome');
    };
});
