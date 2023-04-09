const nodemailer = require("nodemailer");
const { API_KEY, SENDER, PASSWORD } = require("../config/auth");
const SMTP_PORT = 465;
const HOST_SERVICE = "smtp-relay.sendinblue.com";
const transporter = nodemailer.createTransport({
  host: HOST_SERVICE,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: "phamhuudang24122004@gmail.com",
    pass: "c6MYVr7QWBdPbqht",
  },
});
module.exports = { transporter };
