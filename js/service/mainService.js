myApp.service('mainService', ["$q", "$http", "$filter", function($q, $http, $filter) {

    var obj = {};
    obj.incomesData = [];
    obj.expenseData = [];
    obj.incomeTransactionId = 0;
    obj.expenseTransactionId = 0;
    obj.incomeTotal = 0;
    obj.expenseTotal = 0;
    obj.Total = 0;
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

    obj.delete = function(item, selObj) {
        var setObj = (selObj == "incomes") ? obj.incomesData : obj.expenseData;
        var index = setObj.indexOf(item);
        setObj.splice(index, 1);
        if (index == obj.itemIndex) {
            obj.itemIndex = -1;
        }
    }

    obj.update = function(selType, data) {
        if (selType == "incomes") {
            obj.incomesData[obj.itemIndex] = data;
        } else {
            obj.expenseData[obj.itemIndex] = data;
        }
    }

    obj.save = function(data, selType) {
        if (selType == "incomes") {
            obj.incomesData.push(data);
        } else {
            obj.expenseData.push(data);
        }
    }

    obj.getTotal = function(data) {
        var Total = 0;
        if(data == "income"){
            data = obj.incomesData;
        }else if(data == "expense"){
            data = obj.expenseData;
        }
        angular.forEach(data, function(item) {
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
