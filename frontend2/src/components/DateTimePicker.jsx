import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
export default function DateTimePick(props) {

  const handleChange = async(newValue) => {
    props.onDateTimeChange(newValue);  
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="What time should I knock your door...?"
        onChange={handleChange}
        disablePast
      />
    </LocalizationProvider>
  );
}
