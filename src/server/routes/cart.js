const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req, res) => {
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

  const { orderInfo, userInfo } = req.body;

  let infoMerchant = await sendEmailMerchant(
    transporter,
    emailMerchant,
    orderInfo,
    userInfo
  );

  let infoBuyer = await sendEmailBuyer(
    transporter,
    emailMerchant,
    userInfo.name,
    userInfo.email
  );

  logInfo(infoMerchant, infoBuyer);

  res.status(200).send({
    message:
      'You finish the order, we will contact you soon for further actions!',
    data: userInfo
  });
});

module.exports = router;

function logInfo(infoMerchant, infoBuyer) {
  console.log('Message sent merchant: %s', infoMerchant.messageId);
  console.log('Preview URL merchant: %s', nodemailer.getTestMessageUrl(infoMerchant));
  console.log('-------------------------------------');
  console.log('Message sent boyer: %s', infoBuyer.messageId);
  console.log('Preview URL buyer: %s', nodemailer.getTestMessageUrl(infoBuyer));
}

async function sendEmailBuyer(transporter, emailMerchant, userName, userEmail) {
  return await transporter.sendMail({
    from: `"You are cool brother 👻" <${emailMerchant}`,
    to: userEmail,
    subject: `Успешно извършена поръчка!`,
    html: `
      <div>
        <h1>Здравей ${userName}, имате успешно завършена поръчка!</h1>
        <p>Скоро наш сътрудник ще се свърже с Вас за да се уточни начина на доставка и плащане!</p>
        <br>
        <small>Благодарим Ви, че използвахте нашите услуги!</small>
      </div>
    `
  });
}

async function sendEmailMerchant(transporter, emailMerchant, orderInfo, userInfo) {
  const { name, phone, email, message } = userInfo;
  return await transporter.sendMail({
    from: `"Wazaaa Bro 👻" <${emailMerchant}>`,
    to: emailMerchant,
    subject: `Нова поръчка от '${name}'`,
    html: `
      <div>
        <section>
          <h1>Имате нова поръчка от '${name}'</h1>
          <p>
            <strong>Телефон:</strong> ${phone}
          </p>
          <p>
            <strong>Мейл:</strong> ${email}
          </p>
          <p>
            <strong>Съобщение:</strong> ${message}
          </p>
        </section>

        <section>
          ${JSON.stringify(orderInfo, null, '\t')}
        </section>
        </div>
    `
  });
}
