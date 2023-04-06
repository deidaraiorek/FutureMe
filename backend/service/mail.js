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
    pass: "xsmtpsib-748f831d29a9f131f3ed28233d284dfd67007ccfa5c45c449aba171a58bb8cc7-JQyg9zYLC0HZqEAB",
  },
});
module.exports = { transporter };
