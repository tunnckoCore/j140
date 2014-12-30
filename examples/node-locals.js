/**
 * j140 <https://github.com/tunnckoCore/j140>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

 'use strict';

var j140 = require('../index');

/**
 * Sync with locals
 */
var html = j140("Test #{this.state || 'pass'}", {state: 'sync'});
console.log(html);
//=> "Test sync"

/**
 * Async with locals
 */
j140("Test #{this.state || 'pass'}", {state: 'async'}, function (err, data) {
  console.log(data);
  //=> "Test async"
});
