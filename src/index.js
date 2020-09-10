#!/usr/bin/env node
'use strict';

const minimist = require('minimist');
const packageJson = require('../package.json');
const path = require('path');
const playSound = require('play-sound');

const flags = minimist(process.argv.slice(2));

if (flags.help) {
  console.log(`
    Usage
      $ rainymood

    Options
      --timeout, -t   Set a timeout (in minutes) to turn off rain.
      --version       Display current version of the application.
  `);
} else if(flags.version || flags.v) {
  console.log(packageJson.version);
} else {
  const player = playSound();
  const rainyMoodAudio = path.join(__dirname, 'assets/RainyMood.m4a');

  console.log(
    '\x1b[36m%s\x1b[0m',
    "It's a nice, rainy day! Enjoy. \uD83C\uDF27"
  );

  const audio = player.play(rainyMoodAudio, function(err) {
    if (err) {
      throw err;
    }
  });

  if (flags.timeout) {
    setTimeout(function() {
      console.log('\x1b[31m%s\x1b[0m', "Sun's out! \uD83C\uDF24");
      audio.kill();
    }, timeout * 60 * 1000);
  }
}
