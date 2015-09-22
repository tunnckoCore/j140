(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.j140 = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXG4gKiBqMTQwIDxodHRwczovL2dpdGh1Yi5jb20vdHVubmNrb0NvcmUvajE0MD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgQ2hhcmxpa2UgTWlrZSBSZWFnZW50IDxAdHVubmNrb0NvcmU+IChodHRwOi8vd3d3LnR1bm5ja29jb3JlLnRrKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgajE0MCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gajE0MCAoKSB7XG4gIHJldHVybiBqZWRGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKClcbn1cblxuajE0MC5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICByZXR1cm4gajE0MC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbmoxNDAuY29tcGlsZSA9IGZ1bmN0aW9uIGNvbXBpbGUgKHN0cikge1xuICByZXR1cm4gamVkRm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5mdW5jdGlvbiBqZWRGbiAoYSwgYikge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgdmFyIGN0eCA9IHNlbGYgfHwgdGhpc1xuICAgIHJldHVybiBhLnJlcGxhY2UoLyN7KFtefV0qKX0vZywgZnVuY3Rpb24gKGEsIGUpIHtcbiAgICAgIHZhciBGdW5jID0gRnVuY3Rpb24gLy8gZXNsaW50L2pzaGludCB0d2Vha1xuICAgICAgcmV0dXJuIG5ldyBGdW5jKCd4JywgJ3dpdGgoeCkgcmV0dXJuICcgKyBlKS5jYWxsKGN0eCwgYyB8fCBiIHx8IHt9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
