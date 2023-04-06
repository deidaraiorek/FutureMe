const express = require("express");
const cron = require("node-cron");
const mailRouter = require("./controllers/sendmail");
const cors = require("cors");
const app = express();
const PORT = 1337;
app.use(cors());

app.use(express.json());
app.use("/", mailRouter);

app.listen(PORT, () => {
  console.log(`Sever is running on Port ${PORT}`);
});
