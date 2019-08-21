const path = require('path');

const ROOT = `${__dirname}`;

const imgDir = path.join(ROOT, '.cache');

module.exports = {
    options: {
        imgDir,
        preName: 'snapshot_',
        preUrl: 'https://www.npmjs.com/'
    },
    pages: [
        {
            item: {
                name: 'npm-static',
                size: [1000, 800],
            },
            step: [
                {},
            ]
        },
        {
            item: {
                name: 'npm-search-node',
                size: [1000, 800],
            },
            step: [
                {},
                {},
                // {
                //     beforeScreenshot: async (page /*, browser*/ ) => {
                //         await page.focus('#search > div > div > input');
                //     }
                // },
                // {
                //     beforeScreenshot: async (page /*, browser*/ ) => {
                //         await page.focus('#search > div > div > input');
                //         // 填充，不触发默认事件
                //         await page.$eval('#search > div > div > input', input => input.value = 'node' );
                //     }
                // },
                // {
                //     beforeScreenshot: async (page /*, browser*/ ) => {
                //         await page.focus('#search > div > div > input');
                //         await page.type('#search > div > div > input', 'node', { delay: 100 });
                //     }
                // },
                // {
                //     beforeScreenshot: async (page /*, browser*/ ) => {
                //         await page.focus('#search > div > div > input');
                //         await page.type('#search > div > div > input', 'node', { delay: 100 });
                //         await page.waitFor(1000);
                //     }
                // },
                // {
                //     beforeScreenshot: async (page /*, browser*/ ) => {
                //         await page.focus('#search > div > div > input');
                //         await page.type('#search > div > div > input', 'node', { delay: 100 });
                //         await page.waitFor(1000);
                //         await page.keyboard.press('Enter', { delay: 50 });
                //     }
                // },
                // {
                //     beforeScreenshot: async (page /*, browser*/ ) => {
                //         await page.focus('#search > div > div > input');
                //         await page.type('#search > div > div > input', 'node', { delay: 100 });
                //         await page.waitFor(1000);
                //         await page.keyboard.press('Enter', { delay: 50 });
                //         await page.waitFor(1000);
                //     }
                // },
                // {
                //     beforeScreenshot: async (page /*, browser*/ ) => {
                //         await page.focus('#search > div > div > input');
                //         await page.type('#search > div > div > input', 'node', { delay: 100 });
                //         await page.waitFor(1000);
                //         await page.keyboard.press('Enter', { delay: 50 });
                //         await page.waitFor(1000);
                //     }
                // },
            ],
        },
    ]
};