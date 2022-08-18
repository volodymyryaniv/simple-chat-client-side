import React from 'react';
import { Link } from 'react-router-dom';
import UserPhoto from '../../modules/UserPhoto/UserPhoto';
import styles from './DialogueHeader.module.scss';

export default function DialogueHeader({ name, src }) {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img
          src="/icons/arrow-left.svg"
          alt="Arrow left icon"
          className={styles.icon}
        />
      </Link>
      <UserPhoto src={src} />
      <h2>{name}</h2>
    </div>
  );
}
