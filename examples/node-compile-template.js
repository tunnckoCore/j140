/**
 * j140 <https://github.com/tunnckoCore/j140>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

 'use strict';

var j140 = require('../index');

/**
 * Sync with locals - compile template
 * returning function that recieve locals
 */
var html = j140("Welcome back, #{this.name || 'guest'}!", {name: 'Charlike'}, true);

console.log(html());
//=> "Welcome back, guest!"

console.log(html({name: 'Charlike'}));
//=> "Welcome back, Charlike!"

/**
 * Sync with locals - compile template
 * returning function that recieve locals
 */
var hello = j140("Hello, #{this.name || 'world'}!", null, true);
console.log(hello());
//=> "Hello, world!"

console.log(hello({name: 'Charlike'}));
//=> "Hello, Charlike!"

// Or make a template with a context...
var greet = j140("Allow me to say, '#{hello(this)}'", {hello: hello}, true)

// and run it as is...
console.log(greet({name: "Jed"}))
// => "Allow me to say, 'Hello, Jed!'"


// or with its own context.
console.log( // => "Allow me to say, 'Hello, JANE DOE!'"
  greet(
    {name: "Jane Doe"},
    {hello: function(x) {
      return hello({ name: x.name.toUpperCase() })
    }}
  )
)
