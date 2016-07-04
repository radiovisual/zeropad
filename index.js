'use strict';
var isNegativeZero = require('negative-zero');

module.exports = function(number, length) {
    if (isNaN(number)) {
        throw new SyntaxError('zeropad requires a number or string');
    }

    if (typeof length !== 'undefined' && (isNaN(length) || length < 0)) {
        throw new SyntaxError('zeropad requires a positive integer for length');
    }

    var isNegative = isNegativeZero(number) || number < 0;

    function value(num) {
        if (isNegative) {
            return '-' + num;
        }
        return num;
    }

    length = length || 2;
    number = Math.abs(parseFloat(number));
    var padLength = (length - String(number).length) + 1;

    var pads = new Array(padLength).join('0');
    return value(pads + number);
};
