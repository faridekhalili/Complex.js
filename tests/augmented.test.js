var Complex = require("complex.js");
var assert = require("assert");

describe('Random sample tests', () => {

    it('Sample 9', () => {
        /**
          ArithmeticOperator
          complex.js:1139:15
          -         var d = a * a + b * b;
          +         var d = a / a + b * b;
         */
        const c = new Complex.Complex(2, 2);
        assert.deepEqual(c.acsch(), new Complex(0.25489557334055074, -0.24452216513554018))
    });

});