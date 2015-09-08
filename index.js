'use strict';

module.exports = function(num, length){

    num = parseFloat(num);

    if ( isNaN(num) || isNaN(length)) {
        throw new SyntaxError('zeropad parameters must be : <string|number>, <number>');
    }

    if (num > length) {
        return num;

    } else if ( num === 0 )  {
        return new Array(length+1).join('0');

    } else {

        var l = (length - String(num).length) + 1;
        var pad = new Array(l).join('0');
        return pad+num;

    }

};
