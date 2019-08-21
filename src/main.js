const Capture = require('./lib/capture');

const tool = require('./lib/util/tool');
const TransData = require('./lib/util/trans-data');
const ErrorConfig = require('./lib/error-config');

/**
 * @name
 * @param   {String} dataFile   操作文件路径 | Abs
 * @param   {Object} opts 👇
 *      { options, pagesFormat: [ { name, size, step } ] }
 */
module.exports = (dataFile = '', opts = {}) => {
    const {
        options = {},
        pagesFormat = [],
    } = TransData(dataFile);
    const {
        cover = true,
    } = opts;

    return new Promise((resolve, reject) => {
        // 有页面需要生成图片
        if(pagesFormat.length) {
            // 覆盖原来的
            if(cover) {
                tool.removeAllFileUnderDir(options.imgDir);
            }

            new Capture(pagesFormat).main().then(() => {
                resolve();
            });
        } else {
            reject(ErrorConfig.NO_PAGES);
        }
    });
};