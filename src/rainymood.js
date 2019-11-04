const path = require('path');
const playSound = require('play-sound');

const player = playSound();
const rainyMoodAudio = path.join(__dirname, 'assets/RainyMood.m4a');

const rainyMood = ({ timeout }) => {
  console.log(
    '\x1b[36m%s\x1b[0m',
    "It's a nice, rainy day! Enjoy. \uD83C\uDF27"
  );

  const audio = player.play(rainyMoodAudio, err => {
    if (err) {
      throw err;
    }
  });

  if (timeout) {
    setTimeout(() => {
      console.log('\x1b[31m%s\x1b[0m', "Sun's out! \uD83C\uDF24");
      audio.kill();
    }, timeout * 60 * 1000);
  }
};

module.exports = rainyMood;
