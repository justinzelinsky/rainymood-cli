#!/usr/bin/env node
'use strict';

const meow = require('meow');

const rainyMood = require('./rainymood');

const cli = meow(`
  Usage
    $ rainymood

  Options
    --timeout, -t   Set a timeout (in minutes) to turn off rain.
    --version       Display current version of the application.
`, {
  flags: {
    timeout: {
      type: 'number',
      alias: 't'
    }
  }
});

rainyMood(cli.flags);
