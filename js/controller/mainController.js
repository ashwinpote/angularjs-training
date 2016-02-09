myApp.controller('myController', function($scope, dataService) {

    init();

    $scope.empList = [];
    $scope.income = {};

    function init() {
        dataService.getincomejson().then(function(data) {
            $scope.incomes = data;
            $scope.incomeTotal = dataService.getTotal(data);
        });
        dataService.getexpensejson().then(function(data) {
            $scope.expense = data;
            $scope.expenseTotal = dataService.getTotal(data);
        });
        $scope.modeofpayments = dataService.modeofpayments();
        $scope.categorys = dataService.categorys();

        //$scope.income.date = $scope.date;
    };

    $scope.submitMyForm = function(formdata, sel_Arr, sel_Dept) {
        if (sel_Dept) {
            dataService.save(formdata, sel_Arr, sel_Dept);
        } else {
            dataService.save(formdata, sel_Arr, sel_Dept);
        }

        if (sel_Arr == "incomes") {
            incomeForm.reset();
        } else {
            expenseForm.reset();
        }
        getSum();
    };

    $scope.edit = function(item, selObj) {
        dataService.edit(item, selObj, $scope);
    }

    $scope.delete = function(item, selObj) {
        dataService.delete(item, selObj);
        getSum();
    };

    $scope.cancel = function() {
        dataService.cancel($scope);
    };

    function getSum() {
        $scope.incomeTotal = dataService.getTotal($scope.incomes);
        $scope.expenseTotal = dataService.getTotal($scope.expense);
    }
});

myApp.controller('addIncomeCtl', function($scope, dataService, $filter) {
   $scope.income.date = new Date();
});

myApp.controller('addExpenseCtl', function($scope, dataService, $filter) {
   $scope.expense.date = new Date();
});