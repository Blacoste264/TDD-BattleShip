var expect = require('chai').expect;
var checkForShip = require('../gameLogic/shipMethods').checkForShip;

describe('checkForShip', function () {
    describe('Smoke tests', function () {
        it('Should exist', function () {
            expect(checkForShip).to.exist;
        })
        it('Should be a function', function () {
            expect(checkForShip).to.be.a('function');
        })
    })
    describe('CheckForShip', function () {
        it('Should correctly report no ship at a given players coordinate', function () {
            player = {
                ships: [
                    {
                        locations: [[0,0], [0,1]]
                    },
                    {
                        locations: [[1,0], [1,1]]
                    }
                ]
            };
            expect(checkForShip(player, [9,9])).to.be.false;
            expect(checkForShip(player, [0,1])).to.be.true;
            expect(checkForShip(player, [0,0])).to.be.true;
            expect(checkForShip(player, [1,1])).to.be.true;
            expect(checkForShip(player, [1,0])).to.be.true;
        })
    })
})