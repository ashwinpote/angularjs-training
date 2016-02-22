myApp.controller('showIncomeCtl', function($scope, mainService, $state, $rootScope) {

    $scope.income = mainService.incomesData;
    $rootScope.$emit('handleTotal');
    $scope.incomeTotal = mainService.incomeTotal;
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();

    $scope.edit = function(item, index, selObj) {
        $scope.income.transactionId = mainService.incomesData[index].transactionId;
        $scope.income.payer = mainService.incomesData[index].payer;
        $scope.income.payee = mainService.incomesData[index].payee;
        $scope.income.category = mainService.incomesData[index].category;
        $scope.income.amount = mainService.incomesData[index].amount;
        $scope.income.date = mainService.incomesData[index].date;
        $scope.income.modeOfPayment = mainService.incomesData[index].modeOfPayment;
        $scope.income.noteType = mainService.incomesData[index].noteType;
        mainService.itemIndex = index;
    };

    $scope.updateMyForm = function(formdata, sel_type) {
        mainService.update(sel_type, formdata);
        $rootScope.$emit('handleTotal');
        $state.go('showIncome');
    };

    $scope.delete = function(item, selObj) {
        mainService.delete(item, selObj);
        $rootScope.$emit('handleTotal');
        $scope.incomeTotal = mainService.getTotal("income");
    };
});
