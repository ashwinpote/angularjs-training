myApp.controller('myController', function($scope) {

    $scope.expense = [{
        cate: 'House Rent',
        amt: '10000'
    }, {
        cate: 'Grocery',
        amt: '5000'
    }];
    $scope.incomes = [{
        cate: 'Salary',
        amt: '65000'
    }, {
        cate: 'FD Intrest',
        amt: '5000'
    }];

    $scope.incomeTable = true;
    $scope.expenseTable = false;


    $scope.showIncome = function() {
        $scope.incomeTable = true;
        $scope.expenseTable = false;
    }

    $scope.showExpense = function() {
        $scope.incomeTable = false;
        $scope.expenseTable = true;
    }
});
