import React from 'react';
import { NavLink } from 'react-router-dom';
import UserPhoto from '../UserPhoto/UserPhoto';
import styles from './Contact.module.scss';

export default function Contact({ id, name, photo, dialogue }) {
  const message = dialogue.length ? dialogue.at(-1) : '';
  const text = message.message;
  const date = message.date
    ? new Date(message.date)
        .toDateString()
        .split(' ')
        .slice(1)
        .join(',')
        .replace(',', ' ')
    : '';

  return (
    <NavLink to={`${id}`} className={styles.link}>
      <article className={styles.container}>
        <UserPhoto src={photo} />
        <div className={styles.contactInfo}>
          <h3>{name}</h3>
          <p>{text}</p>
        </div>
        <div className={styles.date}> {date}</div>
      </article>
    </NavLink>
  );
}
