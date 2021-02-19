import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.scss';
import classnames from 'classnames';

const DatePicker = ({ setDate, dateAndTime, value, error }) => {
  return (
    <div className={styles.datePickerContainer}>
      <ReactDatePicker
        selected={value}
        onChange={(date) => setDate(date)}
        showTimeSelect={dateAndTime}
        timeIntervals={15}
        dateFormat={dateAndTime ? 'dd/MM/yyyy hh:mm aa' : 'dd/MM/yyyy'}
        wrapperClassName={styles.datePicker}
        className={classnames('', {
          [styles.inputWarning]: error,
        })}
        showYearDropdown
        dropdownMode="select"
        showMonthDropdown
        placeholderText={dateAndTime ? 'Date and time' : 'Date of birth'}
        minDate={dateAndTime && new Date()}
      />
    </div>
  );
};

export default DatePicker;
