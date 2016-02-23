describe('myapp', function() {
    var scope,
        controller;
    beforeEach(function() {
        angular.mock.module('myapp');
    });

    describe('MyCtrl', function() {
        beforeEach(inject(function($rootScope, $controller,  _mainService_) {
            scope = $rootScope.$new();
            mainService = _mainService_;
            controller = $controller('MyCtrl', {
                '$scope': scope
            });
        }));
        it('notification text check', function() {
            expect(scope.notificationMsg).toBe('No Notification...');
        });

        spyOn(mainService, 'getTotal').andReturn(Total);
    });
});
