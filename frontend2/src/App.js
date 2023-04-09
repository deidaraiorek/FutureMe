import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

import DateTimePick from "./components/DateTimePicker";
import {
  Stack,
  TextField,
  Button,
  Typography,
  Snackbar,
  SnackbarContent,
} from "@mui/material";

import axios from "axios";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [parsedDate, setParsedDate] = useState(null);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setSuccess(false);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    // dateformat();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const submitHandler = async () => {
    setLoading(true);
    setOpen(true);
    const year = selectedDate.$y;
    const month = selectedDate.$M;
    const day = selectedDate.$D;
    const hour = selectedDate.$H;
    const minute = selectedDate.$m;
    let time = new Date(year, month, day, hour, minute, 0);
    let info = {
      email: email,
      subject: subject,
      text: text,
      time: time,
    };
    try {
      let res = await axios.post(`http://localhost:1337/sendmail`, info);
      console.log(res.data);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      console.error("Failed to send email", error);
      setLoading(false);
    } finally {
    }
  };

  return (
    <div className="App">
      <Snackbar
        open={loading}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        message="Plase wait some minutes..."
      />
      <Snackbar
        open={success}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
      >
        <SnackbarContent
          sx={{ backgroundColor: "#87CEEB", color: "white" }}
          message="Your email has been sent successfully."
        />
      </Snackbar>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4">Future me, are you okay...?</Typography>
        <Stack spacing={2} mt={2} sx={{ width: "400px" }}>
          <TextField
            label="An email address for our messenger-pigeon...?"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="A subject to make your future self surprise... ?"
            value={subject}
            onChange={handleSubjectChange}
          />
          <TextField
            label="Something to say to your future self... ?"
            multiline
            rows={4}
            value={text}
            onChange={handleTextChange}
          />
          <DateTimePick onDateTimeChange={handleDateChange} />
          <Button variant="contained" onClick={submitHandler}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
