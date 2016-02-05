myApp.controller('myController', function($scope, dataService) {

    $scope.expense = [];
    $scope.incomes = [];
    $scope.incomeTable = true;
    $scope.expenseTable = false;
    var checkSel = "";
    init();

    function init() {
        $scope.expense = dataService.getExpense();
        $scope.incomes = dataService.getIncomes();
    };

    $scope.showIncome = function() {
        $scope.incomeTable = true;
        $scope.expenseTable = false;
    }

    $scope.showExpense = function() {
        $scope.incomeTable = false;
        $scope.expenseTable = true;
    }

    $scope.updateIncome = function(user) {
        dataService.save($scope.incomeTable,$scope,user);
        
    }

    $scope.updateExpense = function(user) {
        if ($scope.userForm.$valid) {
            $scope.expenses.push(user);
            $scope.reset();
        }
    }

     $scope.submitForm = function() {
        console.log("form submit called");
    }

    $scope.save = function() {

        dataService.save($scope.incomeTable, $scope);

    };

    $scope.edit = function(item, selObj) {
        dataService.edit(item, selObj, $scope);

    }

    $scope.delete = function(item, selObj) {
        dataService.delete(item, selObj);
    };

    $scope.cancel = function() {
        dataService.cancel($scope);
    };
});
