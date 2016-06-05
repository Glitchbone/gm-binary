var os = require('os')
var path = require('path');

var platform = os.platform();

if (platform !== 'darwin') {
    console.error('Unsupported platform (OS X only)');
    process.exit(1);
}

process.env.PATH = __dirname + '/bin:' + process.env.PATH;
process.env.MAGICK_CONFIGURE_PATH = __dirname + '/bin/config';

var gmPath = __dirname + '/bin/gm';
var gsPath = __dirname + '/bin/gs';

exports.gmPath = gmPath;
exports.gsPath = gsPath;
