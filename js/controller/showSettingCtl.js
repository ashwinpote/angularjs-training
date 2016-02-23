myApp.controller('showSettingCtl', function($scope, mainService, $rootScope, $interval, $filter) {

    $scope.categorys = mainService.categorys();
    $rootScope.$emit('handleTotal');
    var amt = { "type": "", "amount": "", "date": "date", "category": "" };
    var showAmt = [];
    var showNotify = "";
    var notification = "";

    $scope.radioValue = function(value) {
        $scope.categorys = mainService.categorys();
        checkRadioOpt = value;
    }

    $scope.submitMyForm = function(data) {
        mainService.saveNotify(data, data.value);
        show(data.value, data.recurrType);
        settingForm.reset();
    }

    function show(checkRadioOpt, recurType) {
        if (checkRadioOpt == "Income") {
            bindNotify("Income", mainService.incomesNotify, mainService.incomesData, recurType);
        } else if (checkRadioOpt == "Expense") {
            bindNotify("Expense", mainService.expenseNotify, mainService.expenseData, recurType);
        }
    }

    function bindNotify(selType, notifyArr, incomeArr, recurType) {
       for (var i = 0; i < notifyArr.length; i++) {
            for (var j = 0; j < incomeArr.length; j++) {
                if (incomeArr[j].category == notifyArr[i].category) {
                    amt.type = selType;
                    amt.amount = incomeArr[j].amount;
                    if (recurType == "yearly") {
                        var userdob = new Date(incomeArr[j].date);
                        userdob.setYear(userdob.getFullYear() + 1)
                        amt.date = $filter('date')(new Date(userdob), 'dd-MM-yyyy');
                    } else {
                        var userdob = new Date(incomeArr[j].date);
                        userdob.setMonth(userdob.getMonth() + 1)
                        amt.date = $filter('date')(new Date(userdob), 'dd-MM-yyyy');
                    }                    
                    amt.category = notifyArr[i].category;
                    showAmt.push(amt);
                }
            }
        }

        for (var i = 0; i < showAmt.length; i++) {
            notification = "[ " + showAmt[i]["type"] + " -- " + showAmt[i]["category"] + " -- Due Date: " + showAmt[i]["date"] + " -- amount: " + showAmt[i]["amount"] + " ], ";
        }
        showNotify += notification;
        $rootScope.$emit('handlenotify', showNotify);
    }
});

myApp.directive('myNotificationScope', function() {
    return {
        restrict: 'EA',
        templateUrl: 'view/notification.html',
        replace: true
    };
});
