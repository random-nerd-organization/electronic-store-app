
module.exports = (() => {
    const nodemailer = require('nodemailer');

    const emailMerchant = process.env.EMAIL_MERCHANT;
    const passwordEmailMerchant = process.env.PASSWORD_MERCHANT;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: emailMerchant,
            pass: passwordEmailMerchant
        }
    });

    const _generateOrderInfoHtml = orderInfo => {
        let html = '<div><h1>Поръчани продукти</h1>';

        orderInfo.forEach(product => {
            const productId = product[0];
            const productCount = product[1];

            html += `
                <div>
                    <p><strong>Продукт: </strong> ${productId}</p>
                    <p><strong>Количество: </strong> ${productCount}</p>
                </div>
            `;
        });

        html += '</div>'
        return html;
    };

    const _generateBuyerInfoHtml = ({ name, phone, email, message }) => {
        return `
            <h1>Имате нова поръчка от '${name}'</h1>
            <p><strong>Телефон: </strong>${phone}</p>
            <p><strong>Мейл: </strong>${email}</p>
            <p><strong>Съобщение: </strong>${message}</p>
        `
    };

    const _generateEmailBuyerHtml = userName => {
        return `
            <div>
                <h1>Здравей ${userName}, имате успешно завършена поръчка!</h1>
                <p>Скоро наш сътрудник ще се свърже с Вас за да се уточни начина на доставка и плащане!</p>
                <br>
                <small>Благодарим Ви, че използвахте нашите услуги!</small>
            </div>
        `
    };

    const _generateEmailMerchantHtml = (orderInfo, userInfo) => {
        const orderInfoHtml = _generateOrderInfoHtml(orderInfo);
        const buyerInfoHtml = _generateBuyerInfoHtml(userInfo);
        return `
            <div>
                <section>
                    ${buyerInfoHtml}
                </section>
                </hr>
                <section>
                    ${orderInfoHtml}
                </section>
            </div>
        `
    };

    return {
        sendEmailMerchant: async (orderInfo, userInfo) => {
            const emailMerchantHtml = _generateEmailMerchantHtml(orderInfo, userInfo);

            return await transporter.sendMail({
                from: `"Wazaaa Bro 👻" <${emailMerchant}>`,
                to: emailMerchant,
                subject: `Нова поръчка от '${userInfo.name}'`,
                html: emailMerchantHtml
            });
        },

        sendEmailBuyer: async (userName, userEmail) => {
            const emailBuyerHtml = _generateEmailBuyerHtml(userName);

            return await transporter.sendMail({
                from: `"You are cool brother 👻" <${emailMerchant}`,
                to: userEmail,
                subject: `Успешно извършена поръчка!`,
                html: emailBuyerHtml
            });
        }
    }
})();