var expect = require('chai').expect;
var starWars = require('./index');

describe('Star Wars names', () => {
    describe('all', () => {
        it('should be an array of strings', () => {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(item => {
                    return typeof item === 'string';
                });
            };
        });

        it('should contain `Luke Skywalker`', () => {
            expect(starWars.all).to.include('Luke Skywalker');
        });
    });

    describe('randon', () => {
        it('should return a random item from the starWars.all', () => {
            const randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });
    });
});
