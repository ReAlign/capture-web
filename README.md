# capture-web

> A tool, capture web page snapshot tobe png/gif.

[![NPM version][npm-image]][npm-url]

## Effect

### Goal

* **two task**
  * static:
    * [🔗npm](https://www.npmjs.com/) homepage
  * gif:
    * search `node` in [🔗npm](https://www.npmjs.com/)

[💻 Example](https://github.com/ReAlign/capture-web/tree/master/example/index.md) — 👇 `show-process`

[![image/normal/2019-08-21/img-1566386341610-6930.gif](https://public-bucket-realign.nos-eastchina1.126.net/image/normal/2019-08-21/img-1566386341610-6930.gif)](https://public-bucket-realign.nos-eastchina1.126.net/image/normal/2019-08-21/img-1566386341610-6930.gif)

### Result

* [🔗npm](https://www.npmjs.com/) homepage
  * [![image/normal/2019-08-21/img-1566387653454-1307.png](https://public-bucket-realign.nos-eastchina1.126.net/image/normal/2019-08-21/img-1566387653454-1307.png)](https://public-bucket-realign.nos-eastchina1.126.net/image/normal/2019-08-21/img-1566387653454-1307.png)
* search `node` in [🔗npm](https://www.npmjs.com/)
  * [![image/normal/2019-08-21/img-1566387659149-7621.gif](https://public-bucket-realign.nos-eastchina1.126.net/image/normal/2019-08-21/img-1566387659149-7621.gif)](https://public-bucket-realign.nos-eastchina1.126.net/image/normal/2019-08-21/img-1566387659149-7621.gif)

***

* Based on:
  * [🔗puppeteer](https://github.com/GoogleChrome/puppeteer)
  * [🔗capture-website](https://github.com/sindresorhus/capture-website)
  * [🔗gifencoder](https://github.com/eugeneware/gifencoder)

## Usage

### install

```bash
# install
npm i capture-web -S
```

### Task

```js
const CaptureWeb = require('capture-web');

// configFilePath is：configFile's absolute path
CaptureWeb(`${configFilePath}`).then(() => {
    // do something after task done.
});
```

## Config

configFile

```js
module.exports = {
    // 整体配置项
    options: {
        imgDir = '', // 保存图片文件目录 | 绝对路径
        preName = '', // 图片文件名前缀 | 与后面的 name 拼接，构成完整 图片文件名称
        preUrl = '', // 页面路径前缀 | 与后面的 pagePath 拼接，构成完整 路径
    },
    // 所有需要捕获的页面
    pages: [
        {
            // 单个页面配置
            item: {
                name = '', // 当前页面名称
                pagePath = '', // 当前页面路径
                size = [1920, 1080], // 页面大小，若修改默认值：[Number, Number]
            },
            // 页面操作
            // 每个对象是一帧
            // 只有一个对象的话，就是 png，否则是 gif
            step: [
                {}, // 空对象，表示捕获页面截图
                // 其他的，参考非第一帧的话，参考 https://github.com/sindresorhus/capture-website#api
                {
                    beforeScreenshot: async (page /*, browser*/ ) => {
                        await page.type('#kw', 'github', {delay: 100});
                    },
                },
            ],
        },
    ],
};
```

[npm-image]: https://img.shields.io/npm/v/capture-web.svg?longCache=true&style=for-the-badge
[npm-url]: https://www.npmjs.com/package/capture-web

## Todo

* [ ] Performance optimization
  * [ ] Too slow when capture gif
* [ ] More config
* [ ] Others
