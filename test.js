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

    it('should allow you to omit the length parameter', function(){
        assert.equal(zp(9), '09');
        assert.equal(zp(100), '100');
        assert.equal(zp(0), '00');
    });

    it('should error when num is NaN ', function(){

        assert.throws(function(){
            zp({}, 1);
        });
    });

    it('should error when length is NaN ', function(){

        assert.throws(function(){
            zp(1, {});
        });
    });


});
