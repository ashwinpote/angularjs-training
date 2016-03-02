myApp.controller('editExpenseCtl', function($scope, mainService, $state, $rootScope) {

    //***********Initialize******************************************************//
    $scope.expense = {};
    $scope.categorys = mainService.categorys();
    $scope.modeofpayments = mainService.modeofpayments();
    initEdit();

    //***********For expense data fill in form ************************************// 
    function initEdit() {
        $scope.expense.transactionId = mainService.expenseData[mainService.itemIndex].transactionId;
        $scope.expense.payer = mainService.expenseData[mainService.itemIndex].payer;
        $scope.expense.payee = mainService.expenseData[mainService.itemIndex].payee;
        $scope.expense.category = mainService.expenseData[mainService.itemIndex].category;
        $scope.expense.amount = parseFloat(mainService.expenseData[mainService.itemIndex].amount);
        $scope.expense.date = new Date(mainService.expenseData[mainService.itemIndex].date);
        $scope.expense.modeOfPayment = mainService.expenseData[mainService.itemIndex].modeOfPayment;
        $scope.expense.noteType = mainService.expenseData[mainService.itemIndex].noteType;
    };
    //***********End Function******************************************************// 

    //***********For expense data update ******************************************// 
    $scope.updateExpense = function(formdata) {
        mainService.update('expenses', formdata);
        $rootScope.$emit('handleTotal');
        $state.go('showExpense');
    };
    //***********End Function******************************************************// 
});
