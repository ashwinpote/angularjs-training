describe('phonesApp', function() {
    describe('phoneApp controllers', function() {
        beforeEach(module('controllers'));
        describe('PhoneListCtrl', function() {
            it(' it should create "phones" model with 3 phones',
                inject(function($rootScope, $controller) {

                var scope = $rootScope.$new();
                var ctrl = $controller("PhoneListCtrl", {$scope: scope });
                expect(scope.phones.length).toBe(3);
            }));
        });
    });
});