import React from 'react';
import UserPhoto from '../../modules/UserPhoto/UserPhoto';
import styles from './ContactsHeader.module.scss';

export default function ContactsHeader({ src, filter, setFilter }) {
  return (
    <div className={styles.container}>
      <UserPhoto src={src} />
      <div className={styles.filterContainer}>
        <input
          className={styles.filter}
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search or start new chat"
        />
        <img
          className={styles.icon}
          src="/icons/search.png"
          alt="search icon"
        />
      </div>
    </div>
  );
}
