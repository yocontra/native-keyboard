var kb = require('../');
var play = require('play');

var kbs = kb.getDevices();
var path = kbs.filter(function(kb) {
  return kb.product === 'Apple Wireless Keyboard';
})[0].path;
var aapl = kb.device(path);

var mapping = {
  'ctrl+1': '/Volumes/Pirate/soundz/air-horn.mp3',
  'ctrl+2': '/Volumes/Pirate/soundz/shotgun-reload.mp3',
  'ctrl+3': '/Volumes/Pirate/soundz/shotgun-old-school.mp3',
  'ctrl+4': '/Volumes/Pirate/soundz/shells-falling.mp3'
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