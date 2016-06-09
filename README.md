# gm-binary

[GraphicsMagick](http://www.graphicsmagick.org/) binary ([Ghostscript](http://www.ghostscript.com) included) as a local dependency for OS X

## Usage

``` javascript
var gmBin = require('gm-binary');
console.log(gmBin.gmPath); // /path/to/node_modules/gm-binary/bin/gm
```

The module automatically add the /bin folder to the PATH variable

## Infos

The provided GraphicsMagick binary is built using the following configure parameters:

``` sh
--disable-dependency-tracking --disable-shared --disable-installed --enable-broken-coders --with-modules --with-quantum-depth=16 --without-gslib --without-x --without-lcms2 CC=clang CXX=clang++
```

## Development

Install [Homebrew](http://brew.sh)

Install [mac dylib bundler](https://github.com/auriamg/macdylibbundler)

Adjust build parameters in [graphicsmagick-custom.rb](https://github.com/Glitchbone/gm-binary/blob/master/graphicsmagick-custom.rb)

Run the build script:

``` sh
./build-gm
```

## Author

**Adrien Glitchbone**

+ [https://twitter.com/glitchbone](https://twitter.com/glitchbone)
+ [http://github.com/Glitchbone](http://github.com/Glitchbone)

## License

gm-binary is available under the MIT license. See the [LICENSE](https://github.com/Glitchbone/gm-binary/blob/master/LICENSE) file for more information.

## Copyright

[GraphicsMagick](http://www.graphicsmagick.org/) is Copyright © GraphicsMagick Group

[Ghostscript](http://www.ghostscript.com) is Copyright © Artifex Software, Inc.
