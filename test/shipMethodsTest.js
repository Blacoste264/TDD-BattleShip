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
})