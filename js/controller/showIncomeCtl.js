myApp.controller('showIncomeCtl', function($scope, mainService, $rootScope) {

    //***********Initialize******************************************************//
    $scope.income = mainService.incomesData;
    $scope.incomeTotal = mainService.castAmount(mainService.incomeTotal);
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();
    $rootScope.$emit('handleTotal');

    //***********Update service index*******************************************//
    $scope.edit = function(index) {
        mainService.itemIndex = index;
    };
    //***********End function***************************************************//

    //***********For delete income**********************************************//
    $scope.delete = function(index) {
        mainService.delete("incomes", index);
        $rootScope.$emit('handleTotal');
        $scope.incomeTotal = mainService.getTotal("income");
    };
    //***********End function***************************************************//
});
