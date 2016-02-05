myApp.service('dataService', function() {

    var obj = {};

    obj.incomeService = {};
    obj.expenseService = {};
    obj.itemIndex = -1;
    obj.checkSel = "";

    obj.expense = [{
        transactionId: 1,
        payer: "vijay",
        payee: "abc",
        category: "payement",
        subCategory: "subcategory",
        amount: "200",
        date: "5-9-2015",
        modeOfPayment: "online",
        noteType: "expense"
    }, {
        transactionId: 2,
        payer: "ajay",
        payee: "abc",
        category: "payement",
        subCategory: "subcategory",
        amount: "180",
        date: "8-1-2016",
        modeOfPayment: "cash",
        noteType: "expense"
    }, {
        transactionId: 3,
        payer: "ramesh",
        payee: "abc",
        category: "payement",
        subCategory: "subcategory",
        amount: "200",
        date: "1-1-2016",
        modeOfPayment: "cash",
        noteType: "expense"
    }];

    obj.incomes = [{
        transactionId: 1,
        payer: "vijay",
        payee: "company name",
        category: "payement",
        subCategory: "subcategory",
        amount: "2000",
        date: "1-2-2016",
        modeOfPayment: "online credit",
        noteType: "income"
    }, {
        transactionId: 2,
        payer: "ajay",
        payee: "abc",
        category: "payement2",
        subCategory: "subcategory1",
        amount: "1000",
        date: "8-9-2016",
        modeOfPayment: "cash",
        noteType: "income"
    }, {
        transactionId: 3,
        payer: "ramesh",
        payee: "abc",
        category: "payement",
        subCategory: "subcategory",
        amount: "2000",
        date: "1-1-2016",
        modeOfPayment: "cash",
        noteType: "income"
    }];

    obj.getExpense = function() {
        return obj.expense;
    };

    obj.getIncomes = function() {
        return obj.incomes;
    };

    obj.getSelectedIndex = function() {
        return obj.itemIndex;
    };

    obj.cancel = function($scope) {
        $scope.userForm = {};
    };

    obj.delete = function(item, selObj) {
        if (selObj == "incomes") {
            var index = obj.incomes.indexOf(item);
            obj.incomes.splice(index, 1);

        } else {
            var index = obj.expense.indexOf(item);
            obj.expense.splice(index, 1);

        }
        if (index == obj.itemIndex) {
            obj.itemIndex = -1;
        }
    }

    obj.edit = function(item, selObj, $scope) {
        if (selObj == "incomes") {
            obj.itemIndex = obj.incomes.indexOf(item);
            $scope.category = obj.incomes[obj.itemIndex].cate;
            $scope.amount = obj.incomes[obj.itemIndex].amt;
        } else {
            obj.itemIndex = obj.expense.indexOf(item);
            $scope.category = obj.expense[obj.itemIndex].cate;
            $scope.amount = obj.expense[obj.itemIndex].amt;
        }
    }

    obj.save = function(checkTable, $scope,user) {
        if (checkTable) {
            obj.checkSel = $scope.incomes;
        } else {
            obj.checkSel = $scope.expense;
        }
        console.log($scope.userForm);
        if ($scope.userForm.$valid) {
            obj.checkSel.push(user);
            obj.cancel($scope);
        }
        // if (obj.itemIndex == -1 || obj.itemIndex == undefined) {
        //     if ($scope.category != "" && $scope.amount != "") {
        //         obj.checkSel.push({
        //             cate: $scope.category,
        //             amt: $scope.amount
        //         });
        //         obj.cancel($scope);
        //     } else {
        //         var data = obj.checkSel[obj.itemIndex];
        //         data.cate = $scope.category;
        //         data.amt = $scope.amount;
        //         obj.cancel($scope);
        //         obj.itemIndex = -1;
        //     }
        // } else {
        //     var data = obj.checkSel[obj.itemIndex];
        //     data.cate = $scope.category;
        //     data.amt = $scope.amount;
        //     obj.cancel($scope);
        //     obj.itemIndex = -1;
        // }
    }

    return obj;
});
