myApp.controller('showReportCtl', function($scope, mainService, $rootScope) {
    $scope.income = mainService.incomesData;
    $scope.expense = mainService.expenseData;
    $scope.showIncome = true;
    $scope.showExpence = false;
    $scope.value= 'Income';
    $rootScope.$emit('handleTotal');

    $scope.radioValue = function(value) {
        if (value == "Income") {
            $scope.showIncome = true;
            $scope.showExpence = false;
        } else {
            $scope.showIncome = false;
            $scope.showExpence = true;
        }
    }
});
