var kb = require('../');
var should = require('should');
require('mocha');

describe('native-keyboard', function() {

  describe('getDevices()', function() {
    it('should list keyboards', function(done) {
      var kbs = kb.getDevices();
      should.exist(kbs);
      done();
    });
  });

  describe('on(wasd)', function() {
    it('should trigger the function', function(done) {
      var kbs = kb.getDevices();
      var path = kbs.filter(function(kb) {
        return kb.product === 'Apple Wireless Keyboard';
      })[0].path;
      var aapl = kb.device(path);
      should.exist(aapl);

      aapl.onKey('ctrl+82', function(){
        done();
      });
    });
  });

});
