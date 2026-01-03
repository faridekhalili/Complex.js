var Complex = require("../complex.js");
var assert = require("assert");


describe('Random sample tests', () => {

    it('Sample 10', () => {
        /**
          EqualityOperator
          complex.js:1140:15
          -         return (d !== 0)
          +         return (d === 0)
         */
        const c = new Complex.Complex(1, 2);
        const expected = c.inverse().asinh(); // acsch(z) should equal asinh(1/z)
        assert.strictEqual(c.acsch().toString(), expected.toString());
    });
    
});
