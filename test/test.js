describe('Filters', function() { 
    beforeEach(module('myapp')); 

    describe('reverse', function() { 

        var reverse;
        beforeEach(inject(function($filter) { 
            reverse = $filter('reverse', {});
        }));

        it('Should reverse a string', function() { 
            expect(reverse('ashwin')).toBe('niwhsa'); 
        });

    });

});
