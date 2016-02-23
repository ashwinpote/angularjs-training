myApp.controller('showExpenseCtl', function($scope, mainService, $state, $rootScope) {

    $scope.expense = mainService.expenseData;
    $scope.expenseTotal = parseFloat(mainService.expenseTotal).toFixed(2);
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();
    $rootScope.$emit('handleTotal');

    $scope.edit = function(index) {
        mainService.itemIndex = index;        
    };

    $scope.delete = function(selObj,index) {
        mainService.delete(selObj,index);
        $rootScope.$emit('handleTotal');
        $scope.expenseTotal = mainService.getTotal("expense");
    };
});
