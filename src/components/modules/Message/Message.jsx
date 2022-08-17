import React from 'react';
import styles from './Message.module.scss';

export default function Message({ position, message, date }) {
  const dateTimeArray = date.split(' ');
  const timeString = `${dateTimeArray[1].slice(0, -3)} ${dateTimeArray.at(-1)}`;
  const dateString = dateTimeArray[0];
  
  return (
    <article className={`${styles.container} ${styles[position]}`}>
      <div className={styles.message}>
        <p className={`${styles.text} ${styles[position]}`}>{message}</p>
        <p className={styles.date}>
          {dateString} {timeString}
        </p>
      </div>
    </article>
  );
}
