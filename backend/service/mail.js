const nodemailer = require("nodemailer");
const { API_KEY, SENDER, PASSWORD } = require("../config/auth");
const SMTP_PORT = 465;
const HOST_SERVICE = "smtp-relay.sendinblue.com";
const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "danghuupham@outlook.com",
    pass: "@Phamhuudangt1k11",
  },
});
module.exports = { transporter };
