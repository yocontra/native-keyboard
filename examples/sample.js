var kb = require('../');
var play = require('play');

var kbs = kb.getDevices();
var path = kbs.filter(function(kb) {
  return kb.product === 'Apple Wireless Keyboard';
})[0].path;
var aapl = kb.device(path);

var mapping = {
  'ctrl+1': '/Volumes/Pirate/soundz/air horn (club sample).mp3'
};

Object.keys(mapping).forEach(function(code){
  aapl.onKey(code, function(evt){
    play.sound(mapping[code]);
  });
});

/*
aapl.onKey('*', function(evt){
  console.log(evt);
});
*/