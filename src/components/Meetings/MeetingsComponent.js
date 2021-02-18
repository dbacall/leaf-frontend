import React from 'react';
import styles from './Meetings.module.scss';
import Loader from '../commons/Loader';
import { format, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';

const Meetings = ({ meetings, status }) => {
  const formatMinutes = (minutes) => {
    if (minutes < 10) {
      return '0' + minutes;
    }
    return minutes;
  };

  const renderMeetingRows = () => {
    if (meetings) {
      return meetings.map((meeting, index) => (
        <tr key={index}>
          <td>{format(parseISO(meeting.time), 'Pp', { locale: enGB })}</td>
          <td>{meeting.category}</td>
          <td>
            {meeting.hours} hr {formatMinutes(meeting.minutes)} mins
          </td>
          <td>
            <a
              href={`https://${meeting.videoLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div className={styles.meetings}>
      <h2 className={styles.title}>Meetings</h2>

      {status === 'loading' ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Category</th>
              <th>Length</th>
              <th>Meeting Link</th>
            </tr>
          </thead>
          <tbody>{renderMeetingRows()}</tbody>
        </table>
      )}
    </div>
  );
};

export default Meetings;
