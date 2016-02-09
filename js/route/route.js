myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/showIncome', {
            templateUrl: 'view/show-income.html'
        }).
        when('/showExpense', {
            templateUrl: 'view/show-expense.html'
        }).
        when('/addIncome', {
            templateUrl: 'view/add-income.html',
            controller:'addIncomeCtl'
        }).
        when('/addExpense', {
            templateUrl: 'view/add-expense.html',
            controller:'addExpenseCtl'
        }).
        when('/editIncome', {
            templateUrl: 'view/edit-income.html'
        }).
        when('/editExpense', {
            templateUrl: 'view/edit-expense.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
