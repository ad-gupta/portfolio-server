import { transporter } from "../index.js";

export const ContactForm = async (req, resp) => {
  const { username, email, message } = req.body;
  const mailOptions = {
    from: {
      name: username,
      address: email,
    },
    to: ["awadheshgupta.official@gmail.com"],
    subject: "Portfolio Contact",
    text: "kuchh bhi",
    html: `<p>${email} <br/>
    ${message} </p>`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return console.log(err);
    resp.status(200).send({ message: "Mail sent", message_id: info.messageId });
  });
};
