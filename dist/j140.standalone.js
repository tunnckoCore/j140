(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.j140 = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * j140 <https://github.com/tunnckoCore/j140>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
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

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXG4gKiBqMTQwIDxodHRwczovL2dpdGh1Yi5jb20vdHVubmNrb0NvcmUvajE0MD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSBDaGFybGlrZSBNaWtlIFJlYWdlbnQgPEB0dW5uY2tvQ29yZT4gKGh0dHA6Ly93d3cudHVubmNrb2NvcmUudGspXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBqMTQwID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBqMTQwICgpIHtcbiAgcmV0dXJuIGplZEZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykoKVxufVxuXG5qMTQwLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gIHJldHVybiBqMTQwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuajE0MC5jb21waWxlID0gZnVuY3Rpb24gY29tcGlsZSAoc3RyKSB7XG4gIHJldHVybiBqZWRGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbmZ1bmN0aW9uIGplZEZuIChhLCBiKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICB2YXIgY3R4ID0gc2VsZiB8fCB0aGlzXG4gICAgcmV0dXJuIGEucmVwbGFjZSgvI3soW159XSopfS9nLCBmdW5jdGlvbiAoYSwgZSkge1xuICAgICAgdmFyIEZ1bmMgPSBGdW5jdGlvbiAvLyBlc2xpbnQvanNoaW50IHR3ZWFrXG4gICAgICByZXR1cm4gbmV3IEZ1bmMoJ3gnLCAnd2l0aCh4KSByZXR1cm4gJyArIGUpLmNhbGwoY3R4LCBjIHx8IGIgfHwge30pXG4gICAgfSlcbiAgfVxufVxuIl19
