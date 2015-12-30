# zeropad [![Build Status](https://travis-ci.org/radiovisual/zeropad.svg)](https://travis-ci.org/radiovisual/zeropad)

> Zeropad your positive integers with n-length padding.

*For super-basic number padding (no length options), see [simple-zeropad](https://github.com/radiovisual/simple-zeropad).*

## Install

```sh
$ npm install zeropad
```

## Usage
```js
var zeropad = require('zeropad');

zeropad(10, 4);
// => '0010'

zeropad('11', 4);
// => '0011'

zeropad(4, 10);
// => '0000000004');

zeropad(9, 4);
// => '0009');

```

## API

###zeropad(number, [length])


### number 

*Required*

Type: `Number|String`

The number you want to pad.

### length

Type: `Number`

Default: `2`

The length you want to pad to. Omitting this parameter will give you [classic padding behavior](https://github.com/radiovisual/simple-zeropad).




## License

MIT @ [Michael Wuergler](http://numetriclabs.com)