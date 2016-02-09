myApp.controller('myController', function($scope, dataService) {

    init();

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
    };

    $scope.submitMyForm = function(formdata, sel_Arr, sel_Dept) {
        if (sel_Dept) {
            dataService.save(formdata, sel_Arr, sel_Dept);
        } else {
            dataService.save(formdata, sel_Arr, sel_Dept);
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
