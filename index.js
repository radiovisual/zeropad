'use strict';

module.exports = function(number, length){

    number = parseFloat(number);

    if ( isNaN(number)) {
        throw new SyntaxError('Please supply a valid number to pad');
    }

    if (length !== undefined && isNaN(length)){
        throw new SyntaxError('Invalid length parameter.');
    } else if (!length){
        length = 2;
    }

    if (number > length) {
        return number;

    } else if ( number === 0 )  {
        return new Array(length+1).join('0');

    } else {

        var l = (length - String(number).length) + 1;
        var pad = new Array(l).join('0');
        return pad+number;

    }

};
