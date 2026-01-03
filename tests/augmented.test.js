var Complex = require("complex.js");
var assert = require("assert");

describe('Random sample tests', () => {


    it('Sample 6', () => {
        /**
          StringLiteral
          complex.js:865:20
          -         var a = this['re'];
          +         var a = this[\"\"];
         */
        const c = new Complex.Complex(0, 0);
        assert.deepEqual(c.asec(), new Complex(0, Infinity))
    });

});