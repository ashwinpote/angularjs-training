myApp.controller('showSettingCtl', function($scope, mainService, $rootScope, $filter) {

    //***********Initialize******************************************************//  
    var amt = { "type": "", "amount": "", "date": "date", "category": "" };
    var data = [];
    var showNotify = "";
    var notification = "";
    $scope.categorys = mainService.categorys();
    $rootScope.$emit('handleTotal');

    //***********For check change value in radio button***************************//
    $scope.optValue = function(value) {
        $scope.categorys = mainService.categorys();
        checkRadioOpt = value;
    }

    //***********For update the nodify data*************************************//
    $scope.submitNotify = function(data) {
        mainService.saveNotify(data, data.value);
        showNotify(data.value, data.recurrType);
        settingForm.reset();
    }
    //***********End function*****************************************************//

    //***********For add data into notify object *********************************//
    function showNotify(checkRadioOpt, recurType) {
        if (checkRadioOpt == "Income") {
            bindNotify("Income", mainService.incomesNotify, mainService.incomesData, recurType);
        } else if (checkRadioOpt == "Expense") {
            bindNotify("Expense", mainService.expenseNotify, mainService.expenseData, recurType);
        }
    }
    //***********End function*******************************************************//

    //***********For calculation of notify data againts income/expense**************//
    function bindNotify(selType, notifyArr, mainArr, recurType) {
        for (var i = 0; i < notifyArr.length; i++) {
            for (var j = 0; j < mainArr.length; j++) {
                if (mainArr[j].category == notifyArr[i].category) {
                    amt.type = selType;
                    amt.amount = mainArr[j].amount;
                    if (recurType == "yearly") {
                        var dob = new Date(mainArr[j].date);
                        userdob.setYear(dob.getFullYear() + 1)
                        amt.date = $filter('date')(new Date(userdob), 'dd-MM-yyyy');
                    } else {
                        var dob = new Date(mainArr[j].date);
                        userdob.setMonth(dob.getMonth() + 1)
                        amt.date = $filter('date')(new Date(userdob), 'dd-MM-yyyy');
                    }
                    amt.category = notifyArr[i].category;
                    data.push(amt);
                }
            }
        }
        for (var i = 0; i < data.length; i++) {
            notification = "[ " + data[i]["type"] + " -- " + data[i]["category"] + " -- Due Date: " + data[i]["date"] + " -- amount: " + data[i]["amount"] + " ], ";
        }
        showNotify += notification;
        $rootScope.$emit('handlenotify', showNotify);
    }
    //***********End function*******************************************************//
});