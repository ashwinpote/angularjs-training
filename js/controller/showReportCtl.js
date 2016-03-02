myApp.controller('showReportCtl', function($scope, mainService, $rootScope) {

    //***********Initialize******************************************************//  
    $scope.income = mainService.incomesData;
    $scope.expense = mainService.expenseData;
    $scope.categorys = mainService.categorys();
    $scope.showIncome = true;
    $scope.showExpence = false;
    $scope.value = 'Income';
    $rootScope.$emit('handleTotal');

    //***********For check change radio button value ***************************// 
    $scope.changeType = function(value) {
        if (value == "Income") {
            $scope.showIncome = true;
            $scope.showExpence = false;
        } else {
            $scope.showIncome = false;
            $scope.showExpence = true;
        }
    }
    //***********End function*******************************************************//
});
