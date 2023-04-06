const express = require("express");
const cron = require("node-cron");
const schedule = require("node-schedule");

const { API_KEY, SENDER, PASSWORD } = require("../config/auth");
const { transporter } = require("../service/mail");

const mailRouter = express.Router();

// POST /send-mail
mailRouter.post("/sendmail", (req, res) => {
  let email = req.body.email;
  let subject = req.body.subject;
  let text = req.body.text;
  let time = req.body.time;
  console.log(email, subject, text, time);
  let options = {
    from: SENDER,
    to: email,
    subject: subject,
    text: text,
  };
  schedule.scheduleJob(time, () => {
    console.log("Task scheduled");
    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to send email" });
      } else {
        console.log("Email sent", info);
        res.status(200).json({ message: "Email sent successfully" });
      }
    });
  });
});

module.exports = mailRouter;
