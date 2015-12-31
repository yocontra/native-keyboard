[![Build Status](https://travis-ci.org/contra/native-keyboard.png?branch=master)](https://travis-ci.org/contra/native-keyboard)

[![NPM version](https://badge.fury.io/js/native-keyboard.png)](http://badge.fury.io/js/native-keyboard)

## Information

<table>
<tr>
<td>Package</td><td>native-keyboard</td>
</tr>
<tr>
<td>Description</td>
<td>Higher level keyboard binding for node apps</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
</table>

## Usage

```javascript
var kb = require('native-keyboard');

var path = kb.getDevices()[0].path;
var myKeyboard = kb.device(device);

myKeyboard.onKey('ctrl+w+a+s+d', function(evt){
  // they pressed ctrl and wasd at the same time
});
```

## Examples

You can view more examples in the [example folder.](https://github.com/Contra/native-keyboard/tree/master/examples)
