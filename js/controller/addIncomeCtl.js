myApp.controller('addIncomeCtl', function($scope, mainService, $state, $rootScope, config) {

    //***********Initialize*****************************************//
    $scope.income = [];
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();
    $scope.income.date = config.currDate;
    $scope.income.transactionId = mainService.getincomeTransactionId();

    //***********For income add new data***************************// 
    $scope.addIncome = function(formdata) {
        mainService.save("incomes", formdata);
        $rootScope.$emit('handleTotal');
        $state.go('showIncome');
    };
    //***********End function**************************************//
});
