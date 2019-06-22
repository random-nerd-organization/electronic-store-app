module.exports = (() => {
    const nodemailer = require('nodemailer');
    const { blue } = require('chalk');
    const log = console.log;

    return {
        logOrderInfo: (infoMerchant, infoBuyer) => {
            log(blue('INFO: Message sent merchant: %s', infoMerchant.messageId));
            log(blue('INFO: Preview URL merchant: %s', nodemailer.getTestMessageUrl(infoMerchant)));
            log(blue('-------------------------------------'));
            log(blue('INFO: Message sent buyer: %s', infoBuyer.messageId));
            log(blue('INFO: Preview URL buyer: %s', nodemailer.getTestMessageUrl(infoBuyer)));
        }
    }
})();