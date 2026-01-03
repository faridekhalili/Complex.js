var Complex = require("complex.js");
var assert = require("assert");

describe('Random sample tests', () => {

    it('Sample 5', () => {
        /**
          StringLiteral
          complex.js:1052:23
          -           var tmp = res['im'];
          +           var tmp = res[\"\"];
         */

        // 0 - 1i is a reverse engineered complex number whose 
        // acos has an imaginary component > 0, to satisfy the conditional
        // to enter the mutated branch.
        const c = new Complex.Complex({ 're': 0, 'im': -1 });
        assert.deepEqual(
            c.acosh(),
            new Complex.Complex({ 're': 0.8813735870195429, 'im': -1.5707963267948966 })
        );
    });
    
});