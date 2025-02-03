var Complex = require("../dist/complex.js");
var assert = require("assert");

describe('First tests', () => {
    describe('Fallback cosh impementation is correct', () => {
        let cachedFunction;
        let Complex;

        before(() => {
            // Must change `cosh` property on the global `Math` object BEFORE importing 
            // Complex.js library. Otherwise, cosh function is "loaded" with the correct 
            // (unaltered) version of the `Math` object.

            cachedFunction = globalThis.Math.cosh;
            globalThis.Math.cosh = undefined;

            const complex = require('../dist/complex.js');
            Complex = complex.Complex;
        });

        it('`Math.cosh` is `undefined`', () => {
            assert.strictEqual(
                Math.cosh,
                undefined
            );
        })

        it('Fallback cosh function works', () => {
            assert.strictEqual(
                new Complex(1, 3).cosh().toString(),
                "-1.5276382501165433 + 0.1658444019189788i"
            );
        });

        after(() => {
            globalThis.Math.cosh = cachedFunction
        });
    });

    describe('test zero', () => {
        it('pow', () => {
            const one = new Complex.Complex(1, 1)
            assert.strictEqual(
                one.pow(0, 0),
                Complex['ONE']
            );
        })
    })

    describe('asec', () => {
        /**
         * BlockStatement complex.js 861
         */
        it('asec', () => {
            const one = new Complex.Complex; (1, 0)
            assert.deepEqual(one.asec(), new Complex.Complex({ 're': 0, 'im': Infinity }));
        })
    })
});

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

    // Difficult to test. 
    // Likely requires importing the library as an ES Module.
    // it('Sample 7', () => {
    //   /**
    //     BooleanLiteral
    //     complex.js:1416:61
    //     -       Object.defineProperty(Complex, \"__esModule\", { 'value': true });
    //     +       Object.defineProperty(Complex, \"__esModule\", { 'value': false });
    //    */
    // });

    it('Sample 8', () => {
        /**
          ArithmeticOperator
          complex.js:898:15
          -         var d = a * a + b * b;
          +         var d = a / a + b * b;
         */
        const c = new Complex.Complex(1, 0);
        assert.deepEqual(c.acsc(), new Complex(1.5707963267948966, -0))
    });

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

    it('Sample 10', () => {
        /**
          EqualityOperator
          complex.js:1140:15
          -         return (d !== 0)
          +         return (d === 0)
         */
        const c = new Complex.Complex([0], [0])
        assert.deepEqual(c.acsch(), new Complex(NaN, NaN))
    });
});