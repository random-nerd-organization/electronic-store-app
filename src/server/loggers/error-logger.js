module.exports = (() => {
    const { red } = require('chalk');
    const log = console.log;

    return {
        logError: (error) => {
            log(red(error));
        }
    }
})();