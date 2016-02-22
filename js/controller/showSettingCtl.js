myApp.controller('showSettingCtl', function($scope, mainService, $rootScope, $interval) {

    $scope.categorys = mainService.categorys();
    $rootScope.$emit('handleTotal');
    $scope.notify = "No notification...";
    var amt = [];
    var notification = "";

    $scope.radioValue = function(value) {
        $scope.categorys = mainService.categorys();
    }

    $scope.submitMyForm = function(data) {
        mainService.saveNotify(data, data.value);
        show();
        settingForm.reset();
    }

    function show() {
        for (var i = 0; i < mainService.incomesNotify.length; i++) {
            for (var j = 0; j < mainService.incomesData.length; j++) {
                if (mainService.incomesData[j].category == mainService.incomesNotify[i].category) {
                    amt.push("Income", mainService.incomesData[j].amount, mainService.incomesData[j].date, mainService.incomesNotify[i].category);
                }
            }
        }
        for (var i = 0; i < mainService.expenseNotify.length; i++) {
            for (var j = 0; j < mainService.expenseNotify.length; j++) {
                if (mainService.expenseNotify[j].category == mainService.expenseNotify[i].category) {
                    amt.push("Expense", mainService.expenseNotify[j].amount, mainService.expenseNotify[j].date, mainService.incomesNotify[i].category);
                }
            }
        }

        var notification = "";
        for (var i = 0; i < amt.length; i++) {
            notification = amt[0] + "--" + amt[3] + "-- Due Date: " + amt[2] + "-- amount: " + amt[1] + " ";
        }

        $scope.notify = notification;
    }


});

myApp.directive('myNotificationScope', function() {
    return {
        restrict: 'EA',
        templateUrl: 'view/notification.html',
        controller: 'showSettingCtl',
        replace: true
    };
});
