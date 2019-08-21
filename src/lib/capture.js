/* eslint-disable require-atomic-updates */
const fs = require('fs');
const mkdirp = require('mkdirp');

const del = require('del');
const ora = require('ora');

const captureWebsite = require('capture-website');
const logger = require('./util/logger');

const GifGenerator = require('./gif-generator');

const OPTS = {
    scaleFactor: 1, // 不缩放
};

class Capture {
    /**
     * @name    constructor
     * @param   {Array}     pagesFormat 👇
     *      [ { name, size, fileDir, step } ]
     */
    constructor(pagesFormat = []) {
        this.pagesFormat = pagesFormat;

        // 默认配置
        this.defOpts = OPTS;
    }
    async main() {
        const {
            pagesFormat = [],
                defOpts = {},
        } = this;

        const spinner = ora('Start capture').start();
        spinner.info('Start capture');
        spinner.isEnabled = true;

        for (let page of pagesFormat) {
            const {
                name,
                size,
                fileDir,
                step = [],
            } = page || {};
            if (!fs.existsSync(fileDir)) {
                mkdirp.sync(fileDir);
                logger.ok(`Dir ${fileDir} created!`);
            }
            if(step.length) {
                const _fullName = `${name}.${step.length > 1 ? 'gif' : 'png'}`;
                spinner.start(`Capturing ${_fullName}`);

                for (let sp of step) {
                    const {
                        url,
                        filePath,
                        options = {},
                    } = sp || {};
                    const CWOptions = Object.assign({},
                        defOpts, {
                            width: size[0],
                            height: size[1]
                        },
                        options,
                    );
                    // const _show = `url: ${url} , img: ${filePath}`;
                    // logger.info(`Begin: ${_show}\n`);
                    await captureWebsite.file(url, filePath, CWOptions);
                    // logger.info(`End: ${_show}\n`);
                }

                if (step.length > 1) {
                    // make gif
                    await GifGenerator(page);

                    await del([`${fileDir}/*.png`]);
                    // logger.ok('del ok');
                } else {
                    // it's png
                }

                spinner.succeed(`Captured ${_fullName}`);
                spinner.isEnabled = true;
                // logger.ok(`🎉 🎉 🎉  ${name}.${_type} generated.`);
            }
        }

        spinner.succeed(`Capture task done`);

        spinner.stop();

        return null;
    }
}

module.exports = Capture;