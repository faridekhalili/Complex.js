var Complex = require("complex.js");
var assert = require("assert");

describe('Random sample tests', () => {

    it('Sample 3', () => {
        /**
          EqualityOperator
          complex.js:1272:14
          -         return Math.abs(z['re'] - this['re']) <= Complex['EPSILON'] &&
          +         return Math.abs(z['re'] - this['re']) < Complex['EPSILON'] &&
         */
        const a = new Complex.Complex({ 're': Complex.Complex['EPSILON'], 'im': 0 })
        assert(a.equals(0, 0))
    });

});