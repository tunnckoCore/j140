/*!
 * j140 <https://github.com/tunnckoCore/j140>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var j140 = module.exports = function j140 () {
  return jedFn.apply(this, arguments)()
}

j140.render = function render () {
  return j140.apply(this, arguments)
}

j140.compile = function compile (str) {
  return jedFn.apply(this, arguments)
}

function jedFn (a, b) {
  var self = this
  return function (c) {
    var ctx = self || this
    return a.replace(/#{([^}]*)}/g, function (a, e) {
      var Func = Function // eslint/jshint tweak
      return new Func('x', 'with(x) return ' + e).call(ctx, c || b || {})
    })
  }
}
