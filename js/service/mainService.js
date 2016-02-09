myApp.service('dataService', ["$q", "$http", "$filter", function($q, $http, $filter) {

    var obj = {};

    obj.incomes = {};
    obj.expense = {};
    obj.itemIndex = -1;
    obj.checkSel = [];
    obj.incomeTransactionId = "";
    obj.expenseTransactionId = "";

    obj.getSelectedIndex = function() {
        return obj.itemIndex;
    };

    obj.modeofpayments = function() {
        return [{
            mode: 'Cash',
            modeofpayment: 'Cash'
        }, {
            mode: 'Online Credit Card',
            modeofpayment: 'Online Credit Card'
        }, {
            mode: 'Cheque',
            modeofpayment: 'Cheque'
        }, {
            mode: 'Online Debit Card',
            modeofpayment: 'Online Debit Card'
        }];
    };

    obj.categorys = function() {
        return [{
            categoryID: 'FD Intrest',
            category: 'FD Intrest'
        }, {
            categoryID: 'Share Market',
            category: 'Share Market'
        }, {
            categoryID: 'Mutual Funds',
            category: 'Mutual Funds'
        }, {
            categoryID: 'Home Rent',
            category: 'Home Rent'
        }, {
            categoryID: 'Light Bill',
            category: 'Light Bill'
        }, {
            categoryID: 'Internet Bill',
            category: 'Internet Bill'
        }, {
            categoryID: 'Mobile Recharge',
            category: 'Mobile Recharge'
        }];
    };

    obj.delete = function(item, selObj) {
        var setObj = (selObj == "incomes") ? obj.incomes : obj.expense;
        var index = setObj.indexOf(item);
        setObj.splice(index, 1);
        if (index == obj.itemIndex) {
            obj.itemIndex = -1;
        }
    }

    obj.edit = function(item, selObj, $scope) {
        if (selObj == "incomes") {
            obj.itemIndex = obj.incomes.indexOf(item);
            $scope.incomes.transactionId = obj.incomes[obj.itemIndex].transactionId;
            $scope.incomes.payer = obj.incomes[obj.itemIndex].payer;
            $scope.incomes.payee = obj.incomes[obj.itemIndex].payee;
            $scope.incomes.category = obj.incomes[obj.itemIndex].category;
            $scope.incomes.amount = obj.incomes[obj.itemIndex].amount;
            $scope.incomes.date = obj.incomes[obj.itemIndex].date;
            $scope.incomes.modeOfPayment = obj.incomes[obj.itemIndex].modeOfPayment;
            $scope.incomes.noteType = obj.incomes[obj.itemIndex].noteType;
        } else {
            obj.itemIndex = obj.expense.indexOf(item);
            $scope.expense.transactionId = obj.expense[obj.itemIndex].transactionId;
            $scope.expense.payer = obj.expense[obj.itemIndex].payer;
            $scope.expense.payee = obj.expense[obj.itemIndex].payee;
            $scope.expense.category = obj.expense[obj.itemIndex].category;
            $scope.expense.amount = obj.expense[obj.itemIndex].amount;
            $scope.expense.modeOfPayment = obj.expense[obj.itemIndex].modeOfPayment;
            $scope.expense.date = obj.expense[obj.itemIndex].date;
            $scope.expense.noteType = obj.expense[obj.itemIndex].noteType;
            $scope.expense[obj.itemIndex] = $scope.expense;
        }
    }

    obj.save = function(data, checkSelect, flag) {
        if (checkSelect == "incomes" && flag) {
            obj.checkSel = obj.incomes;
            obj.checkSel.push(data);
        } else if (checkSelect == "expense" && flag) {
            obj.checkSel = obj.expense;
            obj.checkSel.push(data);
        }
        if (checkSelect == "incomes" && !flag) {
            obj.incomes[obj.itemIndex] = data;
        }
        if (checkSelect == "expense" && !flag) {
            obj.expense[obj.itemIndex] = data;
        }
    }

    obj.getexpensejson = function(q) {
        var deferred = $q.defer();
        var len = 0;
        $http.get("js/json/expense.json")
            .then(function(response) {
                obj.expense = response.data;
                len = response.data.length;
                obj.expenseTransactionId = response.data[len - 1].transactionId;
                deferred.resolve(response.data);
            });
        return deferred.promise;
    }

    obj.getincomejson = function(q) {
        var deferred = $q.defer();
        $http.get("js/json/income.json")
            .then(function(response) {
                obj.incomes = response.data;
                deferred.resolve(response.data);
            });
        return deferred.promise;
    }

    obj.getTotal = function(data) {
        var Total = 0;
        angular.forEach(data, function(item) {
            Total += parseFloat(item.amount);
        });
        return Total;
    }

    obj.getincomeTransactionId = function() {
        obj.incomeTransactionId = obj.incomes[obj.incomes.length - 1].transactionId;
        return obj.incomeTransactionId;
    }
    return obj;
}]);
