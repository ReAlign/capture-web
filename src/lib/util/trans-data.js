const path = require('path');

const _data = (options = {}, item = {}, step = []) => {
    // 全局配置
    const {
        imgDir = '',
        preName = 'snapshot_',
        preUrl = ''
    } = options;
    // 当前所需配置
    const {
        name = '',
        pagePath = '',
        size = [1920, 1080],
    } = item;

    const realName = `${preName}${name}`;
    const fileDir = path.join(imgDir, name);

    const res = {
        name: realName,
        fileDir,
        size,
        step: [],
    };

    const _getListItem = (x, i, arr) => {
        // step.length === 1, 名称没有 `-${i}`
        const _suffix = arr.length > 1 ? `-${i}` : '';
        return {
            url: `${preUrl}${pagePath}`,
            filePath: path.join(fileDir, `${realName}${_suffix}.png`),
            options: x,
        };
    };

    step.forEach((x, i, arr) => {
        res.step.push(_getListItem(x, i, arr));
    });

    return res;
};

module.exports = (dataFile = '') => {
    const {
        options,
        pages,
    } = require(dataFile);
    const pagesFormat = [];

    pages.forEach((page) => {
        pagesFormat.push(_data(options, page.item, page.step));
    });

    return {
        options,
        pagesFormat,
    };
};