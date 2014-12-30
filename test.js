/**
 * j140 <https://github.com/tunnckoCore/j140>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var j140 = require('./index');

describe('j140:', function() {
  it('should support locals (sync)', function(done) {
    var res = j140('Test #{this.state || \'pass\'}', {state: 'sync'});
    assert.strictEqual(res, 'Test sync');
    done();
  });
  it('should support locals (async)', function(done) {
    j140('Test #{this.state || \'pass\'}', {state: 'async'}, handler);

    function handler(err, res) {
      if (err) {
        return done(err);
      }

      assert.strictEqual(res, 'Test async');
      done();
    }
  });
  it('should be default value if not locals defined', function(done) {
    var res = j140('Test #{this.state || \'pass\'}');
    assert.strictEqual(res, 'Test pass');
    done();
  });
  it('should return function if 3rd argument is "true"', function(done) {
    var res = j140('Test #{this.state || \'fn\'}', null, true);
    assert.strictEqual(typeof res, 'function');
    done();
  });
  it('should return function get locals and return template', function(done) {
    var fn = j140('Test #{this.state || \'fn\'}', null, true);
    var res = fn({state: 'locals, pass'});
    assert.strictEqual(res, 'Test locals, pass');
    done();
  });
});
