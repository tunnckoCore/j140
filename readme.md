## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url]

> Javascript template engine in just 140 bytes, for browser and node - by Jed Schmidt

## Install
```bash
npm install j140
npm test
```


## Usage
> For more use-cases see the [tests](./test.js) or [example.js](./example.js)

```js
var j140 = require('j140');

var html = j140("Test #{this.state || 'pass'}", {state: 'complete'})
console.log(html);
// => "Test complete"

j140("Test #{this.state || 'pass'}", {state: 'async'}, function (err, data) {
  console.log(data);
  // => "Test async"
})

var html = j140("Test #{this.state || 'pass'}")
console.log(html);
// => "Test pass"
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Copyright (c) 2014 [Jed Schmindt](http://jed.is) [@jedschmidt](https://twitter.com/jedschmidt)  
Released under the [`MIT`][license-url] and `WTFPL` license.


[npmjs-url]: http://npm.im/j140
[npmjs-img]: https://img.shields.io/npm/v/j140.svg?style=flat&label=j140

[coveralls-url]: https://coveralls.io/r/tunnckoCore/j140?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/j140.svg?style=flat

[license-url]: https://github.com/tunnckoCore/j140/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/j140
[travis-img]: https://img.shields.io/travis/tunnckoCore/j140.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/j140
[daviddm-img]: https://img.shields.io/david/tunnckoCore/j140.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/j140/graphs/contributors

***

_Powered and automated by [readdirp + hogan.js](https://github.com/tunnckoCore), December 30, 2014_