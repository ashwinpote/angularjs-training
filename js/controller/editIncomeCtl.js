myApp.controller('editIncomeCtl', function($scope, mainService, $state, $rootScope) {

    $scope.income = {};
    init();

    function init() {
        $scope.income.transactionId = mainService.incomesData[mainService.itemIndex].transactionId;
        $scope.income.payer = mainService.incomesData[mainService.itemIndex].payer;
        $scope.income.payee = mainService.incomesData[mainService.itemIndex].payee;
        $scope.income.category = mainService.incomesData[mainService.itemIndex].category;
        $scope.income.amount = parseFloat(mainService.incomesData[mainService.itemIndex].amount);
        $scope.income.date = new Date(mainService.incomesData[mainService.itemIndex].date);
        $scope.income.modeOfPayment = mainService.incomesData[mainService.itemIndex].modeOfPayment;
        $scope.income.noteType = mainService.incomesData[mainService.itemIndex].noteType;
    };

    $scope.updateMyForm = function(formdata) {
        mainService.update('incomes', formdata);
        $rootScope.$emit('handleTotal');
        $state.go('showIncome');
    };
});
