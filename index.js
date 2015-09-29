#! /usr/bin/env node

var userArgs = process.argv.slice(2);

var searchPattern = userArgs[0];

var exec = require('child_process').exec;

// To run a command in the system we can use the exec method of the child_process module - a module that comes with Node and doesn't need to be separately installed
var child = exec('ls -a | grep ' + searchPattern, function(err, stdout, stderr) {
  console.log(stdout);
});