#!/usr/bin/env node

var fs = require('fs');
var utils = require('./lib/util');
var path = require('path');

var showErrorBlock = utils.showErrorBlock;
var showTitleBlock = utils.showTitleBlock;
var showSuccessBlock = utils.showSuccessBlock;

var commitMessageFile = process.argv[2];

showTitleBlock('Checking commit message');

var cfg = require('./lib/hooks-cfg.json');

var content = fs.readFileSync(commitMessageFile, {
  encoding: 'utf8'
});