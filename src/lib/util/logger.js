const chalk = require('chalk');

const logger = {
    ok(str) {
        console.log(chalk.bold.green(`✔ \t${str}`));
    },
    error(str) {
        console.log(chalk.bold.red(`✘ \t${str}`));
    },
    warn(str) {
        console.log(chalk.yellow(`⚠️ \t${str}`));
    },
    info(str) {
        console.log(chalk.blue(`✏️ \t${str}`));
    },
    show(str, logo = '') {
        if(logo) {
            str = `${logo} \t${str}`;
        }
        console.log(str);
    },
    json(str) {
        console.log(chalk.blue(`JSON\n${JSON.stringify(str, null, ' ')}`));
    }
};

module.exports = logger;