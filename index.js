var hid = require('hidstream');

var matches = function(event, key) {
  return event.modKeys.indexOf(key) !== -1 || event.charCodes.indexOf(key) !== -1 || event.keyCodes.indexOf(parseInt(key)) !== -1;
};

module.exports = {
  getDevices: function() {
    return hid.devices().filter(function(dev){
      return (dev.product.indexOf('Keyboard') !== -1);
    });
  },
  device: function(path) {
    var dev = new hid.device(path, {parser: hid.parser.keyboard});
    dev.onKey = function(keys, fn) {
      keys = keys.split('+');
      dev.on('data', function(dat){
        console.log(dat);
        var matcher = matches.bind(null, dat);
        if (keys !== '*' && !keys.every(matcher)) return;
        fn(dat);
      });
    };
    return dev;
  }
};
