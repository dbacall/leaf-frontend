import React from 'react';
import DatePicker from './DatePickerComponent';

const DatePickerContainer = ({ setDate, value, dateAndTime, error }) => {
  return (
    <DatePicker
      setDate={setDate}
      value={value}
      dateAndTime={dateAndTime}
      error={error}
    />
  );
};

export default DatePickerContainer;
