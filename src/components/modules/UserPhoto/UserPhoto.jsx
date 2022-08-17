import React from 'react';
import styles from './UserPhoto.module.scss';

export default function UserPhoto({ src, verified = true }) {
  return (
    <div className={styles.container}>
      <img src={src} alt="user icon" className={styles.image} />
      {verified && (
        <img
          src={'/icons/verified-user.png'}
          alt="verified user icon"
          className={styles.virified}
        />
      )}
    </div>
  );
}
