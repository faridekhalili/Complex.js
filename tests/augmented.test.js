var Complex = require("complex.js");
var assert = require("assert");

describe('Random sample tests', () => {

    it('Sample 8', () => {
        /**
          ArithmeticOperator
          complex.js:898:15
          -         var d = a * a + b * b;
          +         var d = a / a + b * b;
         */
        const c = new Complex.Complex(2, 0);
        // For real inputs, acsc(x) = asin(1/x); with x = 2 this is π/6.
        assert.strictEqual(c.acsc().toString(), "0.5235987755982989");
    });

});
