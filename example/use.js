const path = require('path');

const CaptureWeb = require('./../src/main');

CaptureWeb(path.join(__dirname, 'data.js')).then(() => {
    console.log('Custom: Promise task resolved.');
});
