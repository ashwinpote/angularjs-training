myApp.controller('showIncomeCtl', function($scope, mainService, $state, $rootScope) {

    $scope.income = mainService.incomesData;
    $scope.incomeTotal = parseFloat(mainService.incomeTotal).toFixed(2);
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();
    $rootScope.$emit('handleTotal');

    $scope.edit = function(index) {
        mainService.itemIndex = index;
    };   

    $scope.delete = function(selObj,index) {
        mainService.delete(selObj,index);
        $rootScope.$emit('handleTotal');
        $scope.incomeTotal = mainService.getTotal("income");
    };
});
