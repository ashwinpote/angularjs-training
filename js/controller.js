myApp.controller('myController', function($scope, mainService) {

    init();

    $scope.empList = [];
    $scope.income = {};

    function init() {
        mainService.getincomejson().then(function(data) {
            $scope.incomes = data;
            $scope.incomeTotal = mainService.getTotal(data);
        });
        mainService.getexpensejson().then(function(data) {
            $scope.expense = data;
            $scope.expenseTotal = mainService.getTotal(data);
        });
        $scope.modeofpayments = mainService.modeofpayments();
        $scope.categorys = mainService.categorys();
    };

    $scope.submitMyForm = function(formdata, sel_Arr, sel_Dept) {
        if (sel_Dept) {
            mainService.save(formdata, sel_Arr, sel_Dept);
        } else {
            mainService.save(formdata, sel_Arr, sel_Dept);
        }

        if (sel_Arr == "incomes") {
            incomeForm.reset();
        } else {
            expenseForm.reset();
        }
        getSum();
    };

    $scope.edit = function(item, selObj) {
        mainService.edit(item, selObj, $scope);
    }

    $scope.delete = function(item, selObj) {
        mainService.delete(item, selObj);
        getSum();
    };

    $scope.cancel = function() {
        mainService.cancel($scope);
    };

    function getSum() {
        $scope.incomeTotal = mainService.getTotal($scope.incomes);
        $scope.expenseTotal = mainService.getTotal($scope.expense);
    }
});

myApp.controller('addIncomeCtl', function($scope, mainService) {
   $scope.income.date = new Date();
});

myApp.controller('addExpenseCtl', function($scope, mainService) {
   $scope.expense.date = new Date();
});