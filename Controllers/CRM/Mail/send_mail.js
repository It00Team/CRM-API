const nodemailer = require("nodemailer");

exports.mail = async (req, res, next) => {
  try {
    console.log(req.body);
    const { sender, sender_pass, reciever, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com.",
      port: 465,
      secure: true,
      auth: {
        user: sender,
        pass: sender_pass,
      },
    });

    const info = await transporter.sendMail({
      from: sender, // sender address
      to: reciever, // list of receivers
      subject: subject, // Subject line
      // text: text, // plain text body
      html: text, // html body
    });

    res.send(info);
  } catch (error) {
    next(error);
  }
};
