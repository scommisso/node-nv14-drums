'use strict';

var getClick = require('nv14-click-track');

var drums = {
  play: function playDrums(song) {
    var click = getClick(song.name);
    click.on('tick', function (position) {
      sendMessage(song.drums, position);
    });
  }
}

function sendMessage(songData, position) {
  for (var i = 0; i < songData.length; i++) {
    var data = songData[i];
    if (data.measure === position.measure && data.beat === position.beat) {
      console.log('Drums: ' + data.message);
    }
  }
}

module.exports = drums;