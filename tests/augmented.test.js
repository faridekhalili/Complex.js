var Complex = require("complex.js");
var assert = require("assert");

describe('Random sample tests', () => {

    it('Sample 1', () => {
        /**
          StringLiteral
          complex.js:1086:30
          -         x['im'] = Math.atan2(x['im'], temp) / 2;
          +         x['im'] = Math.atan2(x[\"\"], temp) / 2;
         */
        const c = Complex.Complex['ZERO'];
        assert.deepEqual(c, c.atanh());
    });
    
});