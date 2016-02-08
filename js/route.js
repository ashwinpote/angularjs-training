myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/showIncome', {
            templateUrl: 'templates/show-income.html'
        }).
        when('/showExpense', {
            templateUrl: 'templates/show-expense.html'
        }).
        when('/addIncome', {
            templateUrl: 'templates/add-income.html',
            controller: 'addIncomeController'
        }).
        when('/addExpense', {
            templateUrl: 'templates/add-expense.html',
            controller: 'addExpenseController'
        }).
        when('/editIncome', {
            templateUrl: 'templates/edit-income.html'
        }).
        when('/editExpense', {
            templateUrl: 'templates/edit-expense.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
