myApp.service('mainService', ["$q", "$http", function($q, $http) {

    var obj = {};
    obj.incomesData = [];
    obj.expenseData = [];
    obj.incomesNotify = [];
    obj.expenseNotify = [];
    obj.incomeTransactionId = 0;
    obj.expenseTransactionId = 0;
    obj.itemIndex = -1;

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

    obj.getexpensejson = function(q) {
        var deferred = $q.defer();
        $http.get("js/json/expense.json")
            .then(function(response) {
                obj.expenseData = response.data;
                deferred.resolve(response.data);
            }).catch(function(e) {
                console.log("$http error", e);
                throw e;
            });
        return deferred.promise;
    }

    obj.getincomejson = function(q) {
        var deferred = $q.defer();
        $http.get("js/json/income.json")
            .then(function(response) {
                obj.incomesData = response.data;
                deferred.resolve(response.data);
            }).catch(function(e) {
                console.log("$http  error", e);
                throw e;
            });
        return deferred.promise;
    }

    obj.delete = function(selType, index) {
        var setObj = (selType == "incomes") ? obj.incomesData : obj.expenseData;
        setObj.splice(index, 1)
        if (index == obj.itemIndex) {
            obj.itemIndex = -1;
        }
    }

    obj.update = function(selType, data) {
        var setObj = (selType == "incomes") ? obj.incomesData : obj.expenseData;
        setObj[obj.itemIndex] = data;
    }

    obj.save = function(selType, data) {
        var setObj = (selType == "incomes") ? obj.incomesData : obj.expenseData;
        setObj.push(data);
    }

    obj.saveNotify = function(data, selType) {
        var setObj = (selType == "Income") ? obj.incomesNotify : obj.expenseNotify;
        setObj.push(data);
    }

    obj.getTotal = function(selObj) {
        var Total = 0;
        var setObj = (selObj == "income") ? obj.incomesData : obj.expenseData;
        angular.forEach(setObj, function(item) {
            Total += parseFloat(item.amount);
        });
        return Total;
    }

    obj.getincomeTransactionId = function() {
        if (obj.incomesData.length > 0) {
            obj.incomeTransactionId = obj.incomesData[obj.incomesData.length - 1].transactionId;
        }
        return obj.incomeTransactionId;
    }

    obj.getexpenseTransactionId = function() {
        if (obj.expenseData.length > 0) {
            obj.expenseTransactionId = obj.expenseData[obj.expenseData.length - 1].transactionId;
        }
        return obj.expenseTransactionId;
    }
    return obj;
}]);
