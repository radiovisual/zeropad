# zeropad [![Build Status](https://travis-ci.org/radiovisual/zeropad.svg)](https://travis-ci.org/radiovisual/zeropad)

> Zeropad your positive integers with n-length padding.

*For super-basic number padding (no length options), see [zeropad-simple](https://github.com/radiovisual/simple-zeropad).*

## Install

```sh
$ npm install zeropad
```

## Usage
```js
var zeropad = require('zeropad');

zeropad(10, 4);
// => '0010'

zeropad(4, 10);
// => '0000000004');

zeropad(9, 4);
// => '0009');

```

## License

MIT @ [Michael Wuergler](http://numetriclabs.com)