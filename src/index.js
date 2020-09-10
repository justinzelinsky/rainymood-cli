#!/usr/bin/env node
'use strict';

const minimist = require('minimist');
const rainyMood = require('./rainymood');
const packageJson = require('../package.json');

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
  const { timeout } = flags;
  rainyMood(timeout);
}
