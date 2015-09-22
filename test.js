/*!
 * j140 <https://github.com/tunnckoCore/j140>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var j140 = require('./index')
var utils = require('utils')

test('should j140() render a string with locals', function (done) {
  var html = j140('<div>Hello #{place} and #{user.name}!</div>', {
    place: 'world',
    user: {
      name: 'Charlike'
    }
  })

  test.strictEqual(html, '<div>Hello world and Charlike!</div>')
  done()
})

test('should j140.compile() return function', function (done) {
  var fn = j140.compile('foo #{bar} baz')
  test.strictEqual(typeof fn, 'function')
  test.strictEqual(fn({bar: 'BAR'}), 'foo BAR baz')
  done()
})

test('should j140.render() be same as j140()', function (done) {
  var res = j140.render('foo #{bar} baz', {bar: 'QUUX'})
  test.strictEqual(res, 'foo QUUX baz')
  done()
})

test('should pass custom context to .compile', function (done) {
  var str = 'foo #{bar} and #{this.ctx}, yesh!'
  var render = j140.compile.call({ctx: 'context'}, str)
  var res = render({bar: 'BAR'})
  test.strictEqual(res, 'foo BAR and context, yesh!')
  done()
})

test('should pass custom context to .render', function (done) {
  var str = 'foo #{bar} and #{this.ctx}, yesh!'
  var res = j140.render.call({ctx: 'context'}, str, {bar: 'QUX'})
  test.strictEqual(res, 'foo QUX and context, yesh!')
  done()
})

test('should work with custom helpers', function (done) {
  var str = 'foo #{uppercase("bar")} baz'
  var res = j140.render(str, {uppercase: function (str) {
    return str.toUpperCase()
  }})

  test.strictEqual(res, 'foo BAR baz')
  done()
})

test('should be able to use `utils` lib as helpers ', function (done) {
  var str = 'foo #{truncate("bar baz", 5)} baz'
  var res = j140.render(str, utils.string)

  test.strictEqual(res, 'foo bar b baz')
  done()
})
