myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/showIncome');

        $stateProvider.
        state('showIncome', {
            url: '/showIncome',
            templateUrl: 'view/show-income.html',
            controller: 'showIncomeCtl'
        }).
        state('showExpense', {
            url: '/showExpense',
            templateUrl: 'view/show-expense.html',
            controller: 'showExpenseCtl'
        }).
        state('addIncome', {
            url: '/addIncome',
            controller: 'addIncomeCtl',
            templateUrl: 'view/add-income.html'
        }).
        state('addExpense', {
            url: '/addExpense',
            controller: 'addExpenseCtl',
            templateUrl: 'view/add-expense.html'
        }).
        state('editIncome', {
            url: '/editIncome',
            templateUrl: 'view/edit-income.html'
        }).
        state('editExpense', {
            url: '/editExpense',
            templateUrl: 'view/edit-expense.html'
        });
    }
]);
