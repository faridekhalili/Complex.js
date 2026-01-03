var Complex = require("complex.js");
var assert = require("assert");

describe('Random sample tests', () => {

    it('Sample 2', () => {
        /**
          EqualityOperator
          complex.js:878:12
          -             (a !== 0) ? a / 0 : 0,
          +             (a === 0) ? a / 0 : 0,
         */

        // 0 made to be [0] so that a === 0 condition is bypassed but
        // a * a + b * b !== 0 condition is not (due to type coercion).
        const c = new Complex.Complex({ 're': [0.0], 'im': 0 })
        assert.deepEqual(c.asec(), new Complex.Complex({ 're': NaN, 'im': NaN }));
    });

});