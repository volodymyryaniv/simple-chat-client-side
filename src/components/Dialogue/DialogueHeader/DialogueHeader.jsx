import React from 'react';
import UserPhoto from '../../modules/UserPhoto/UserPhoto';
import styles from './DialogueHeader.module.scss';

export default function DialogueHeader({ name, src }) {
  return (
    <div className={styles.container}>
      <UserPhoto src={src} />
      <h2>{name}</h2>
    </div>
  );
}
