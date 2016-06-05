var it = require('tape');
var fs = require('fs');
var gmBin = require('..');

it('should find gm', function(t) {
    var stats = fs.statSync(gmBin.gmPath);
    t.ok(stats.isFile(gmBin.gmPath));
    t.end();
});

it('should find gs', function(t) {
    var stats = fs.statSync(gmBin.gsPath);
    t.ok(stats.isFile(gmBin.gsPath));
    t.end();
});
