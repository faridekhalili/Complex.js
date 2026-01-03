var Complex = require("complex.js");
var assert = require("assert");

describe('Random sample tests', () => {

    it('Sample 4', () => {
        /**
          ConditionalExpression
          complex.js:894:22
          -         if (a === 0 && b === 0) {
          +         if (a === 0 && true) {
         */
        const c = new Complex.Complex({ 're': 0, 'im': 1 })
        assert.deepEqual(c.acsc(), new Complex({ 're': 0, 'im': -0.8813735870195429 }))
    });

});