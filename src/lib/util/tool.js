const fs = require('fs');
const path = require('path');
const logger = require('./logger');

const TOOL = {
    removeAllFileUnderDir(dirPath = '', opts = {}) {
        const {
            dirKeep = true,
        } = opts;
        if (!fs.existsSync(dirPath)) {
            logger.error(`dir path does not exist: ${dirPath}`);
            return false;
        } else {
            fs.readdirSync(dirPath).forEach(file => {
                const curPath = path.join(dirPath, file);
                // 是文件夹
                if (fs.statSync(curPath).isDirectory()) {
                    //递归删除文件夹
                    TOOL.removeAllFileUnderDir(curPath);
                } else {
                    //删除文件
                    fs.unlinkSync(curPath);
                }
            });
            // 不保留文件夹
            if(!dirKeep) {
                fs.rmdirSync(dirPath);
            }

            return true;
        }
    },
};

module.exports = TOOL;
