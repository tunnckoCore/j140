/**
 * j140 <https://github.com/tunnckoCore/j140>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory());
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    global.j140 = factory();
  }
})(this, function() {
  'use strict';

  function jedExport(str, options, done) {
    if (typeof done === 'boolean' && done === true) {
      return jedFn(str, options);
    }

    var raw = '';
    var output = '';

    try {
      raw = jedFn(str);
      output = raw(options);
    } catch (err) {
      if (typeof done === 'function') {
        return done(err, null);
      }
      return err;
    }

    if (typeof done === 'function') {
      return done(null, output);
    }
    return output;
  }

  function jedFn(a, b) {
    return function(c, d) {
      return a.replace(/#{([^}]*)}/g, function(a, e) {
        return new Function('x', 'with(x) return ' + e).call(c, d || b || {});
      });
    }
  }

  return jedExport;
});
