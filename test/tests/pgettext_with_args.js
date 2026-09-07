"use strict";

var fs = require('fs');
var path = require('path');

var jsxgettext = require('../../lib/jsxgettext');
var utils = require('../utils');

exports['test pgettext/npgettext calls with extra interpolation arguments'] = function (assert, cb) {
  var inputFilename = path.join(__dirname, '..', 'inputs', 'pgettext_with_args.js');
  fs.readFile(inputFilename, "utf8", function (err, source) {
    var options = {keyword: ['__']};
    var result = jsxgettext.generate({'inputs/pgettext_with_args.js': source}, options);
    assert.equal(typeof result, 'string', 'result is a string');
    assert.ok(result.length > 0, 'result is not empty');

    var outputFilename = path.join(__dirname, '..', 'outputs', 'pgettext_with_args.pot');

    utils.compareResultWithFile(result, outputFilename, assert, cb);
  });
};

if (module === require.main) require('test').run(exports);
