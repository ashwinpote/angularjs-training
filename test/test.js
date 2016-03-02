describe('main controller test suite', function() {
    var scope,
        controller;

    beforeEach( module('myapp') );
    
    describe('MyCtrl', function() {
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;

            controller('MyCtrl', {
                $scope : scope
            });
        }));

        it( 'to check default notification msg is No Notification', function () {
            expect( scope.notificationMsg ).toBe('No Notification...');
        });

         it( 'to check default value of reverse sort is false', function () {
            expect( scope.reverseSort ).toBe( false );
        });
    });
});