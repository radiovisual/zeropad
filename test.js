'use strict';

var assert = require('assert');
var zp = require('./');


describe('zeropad', function(){

    it('should zeropad to the given length', function(done){
        assert.equal(zp(10, 4),  '0010');
        assert.equal(zp(4, 10),  '0000000004');
        assert.equal(zp(40, 10), '0000000040');
        assert.equal(zp(9, 4),   '0009');
        assert.equal(zp(0, 1),   '0');
        assert.equal(zp(0, 2),   '00');
        assert.equal(zp(101, 6), '000101');
        done();
    });

    it('should accept numbers as strings', function(done){
        assert.equal(zp('10',  4), '0010');
        assert.equal(zp('4',  10), '0000000004');
        assert.equal(zp('40', 10), '0000000040');
        assert.equal(zp('9',   4), '0009');
        assert.equal(zp('0',   1), '0');
        assert.equal(zp('0',   2), '00');
        assert.equal(zp('101', 6), '000101');
        done();
    });

    it('throws when num is NaN', function(){
        assert.throws(function(){
            zp({}, 1);
        }, 'zeropad requires a number or string');
    });

    it('throws when length is NaN', function(){
        assert.throws(function(){
            zp(1, {});
        }, 'zeropad requires a positive integer for length');
    });

    it('throws on negative length', function(){
        assert.throws(function(){
            zp(1, -1);
        }, 'zeropad requires a positive integer for length');
    });

    it('length is optional', function(){
        assert.equal(zp(9), '09');
        assert.equal(zp(100), '100');
        assert.equal(zp(0), '00');
    });

    it('allows negative numbers', function(){
        assert.equal(zp(-9, 4), '-0009');
        assert.equal(zp(-1), '-01');
        assert.equal(zp(-0), '-00');
    });
});
