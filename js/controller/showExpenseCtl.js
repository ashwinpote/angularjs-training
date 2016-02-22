myApp.controller('showExpenseCtl', function($scope, mainService, $state, $rootScope) {

    $scope.expense = mainService.expenseData;
    $rootScope.$emit('handleTotal');
    $scope.expenseTotal = mainService.expenseTotal;
    $scope.modeofpayments = mainService.modeofpayments();
    $scope.categorys = mainService.categorys();

    $scope.edit = function(item, index, selObj) {
        $scope.expense.transactionId = mainService.expenseData[index].transactionId;
        $scope.expense.payer = mainService.expenseData[index].payer;
        $scope.expense.payee = mainService.expenseData[index].payee;
        $scope.expense.category = mainService.expenseData[index].category;
        $scope.expense.amount = mainService.expenseData[index].amount;
        $scope.expense.date = mainService.expenseData[index].date;
        $scope.expense.modeOfPayment = mainService.expenseData[index].modeOfPayment;
        $scope.expense.noteType = mainService.expenseData[index].noteType;
        mainService.itemIndex = index;
    };

    $scope.updateMyForm = function(formdata, sel_type) {
        mainService.update(sel_type, formdata);
        $rootScope.$emit('handleTotal');
        $state.go('showExpense');
    };

    $scope.delete = function(item, selObj) {
        mainService.delete(item, selObj);
        $rootScope.$emit('handleTotal');
        $scope.expenseTotal = mainService.getTotal("expense");
    };
});
