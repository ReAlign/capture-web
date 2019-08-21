const fs = require('fs');
const path = require('path');

const pngFileStream = require('png-file-stream');
const GIFEncoder = require('gifencoder');

const gifConf = {
    repeat: 0,
    delay: 500,
    quality: 10,
};

module.exports = (opts = {}) => {
    const {
        name,
        size,
        fileDir,
    } = opts;
    return new Promise((resolve) => {
        const encoder = new GIFEncoder(size[0], size[1]);
        const pngsPath = path.join(fileDir, '*.png');
        const gifPath = path.join(fileDir, `${name}.gif`);

        const stream = pngFileStream(pngsPath)
            .pipe(encoder.createWriteStream(gifConf))
            .pipe(fs.createWriteStream(gifPath));

        stream.on('finish', function () {
            resolve();
        });
    });
};