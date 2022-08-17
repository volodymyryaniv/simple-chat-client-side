import React from 'react';
import Contact from '../../modules/Contact';
import styles from './ContactsList.module.scss';

export default function ContactsList({ contacts }) {
  return (
    <div className={styles.container}>
      <h1>Chats</h1>
      {contacts &&
        contacts.map((contact) => {
          return (
            <div key={contact.id} className={styles.contactContainer}>
              <Contact {...contact} />
            </div>
          );
        })}
    </div>
  );
}
