myApp.controller('showSettingCtl', function($scope, mainService, $rootScope, $interval) {

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
        show(data.value);
        settingForm.reset();
    }

    function show(checkRadioOpt) {
        if (checkRadioOpt == "Income") {
            console.log("Income",mainService.incomesNotify)
            for (var i = 0; i < mainService.incomesNotify.length; i++) {
                for (var j = 0; j < mainService.incomesData.length; j++) {
                    if (mainService.incomesData[j].category == mainService.incomesNotify[i].category) {
                        console.log(mainService.incomesData[j].category)
                        amt.type = "Income";
                        amt.amount = mainService.incomesData[j].amount;
                        amt.date = mainService.incomesData[j].date;
                        amt.category = mainService.incomesNotify[i].category;
                        showAmt.push(amt);
                    }
                }
            }
        } else if (checkRadioOpt == "Expense") {
            for (var i = 0; i < mainService.expenseNotify.length; i++) {
                for (var j = 0; j < mainService.expenseData.length; j++) {
                    if (mainService.expenseData[j].category == mainService.expenseNotify[i].category) {
                        console.log(mainService.expenseData[j].category)
                        amt.type = "Expense";
                        amt.amount = mainService.expenseData[j].amount;
                        amt.date = mainService.expenseData[j].date;
                        amt.category = mainService.expenseNotify[i].category;
                        showAmt.push(amt);
                        //amt={"Expense", mainService.expenseData[j].amount, mainService.expenseData[j].date, mainService.expenseNotify[i].category};
                    }
                }
            }
        }
        console.log(showAmt)


        for (var i = 0; i < showAmt.length; i++) {
            notification = showAmt[i]["type"] + " -- " + showAmt[i]["category"] + " -- Due Date: " + showAmt[i]["date"] + " -- amount: " + showAmt[i]["amount"] + " -- ";
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
