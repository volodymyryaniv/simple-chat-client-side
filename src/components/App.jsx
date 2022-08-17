import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts';
import Dialogue from './Dialogue';
import StatusToastPortal from './modules/StatusToastPortal';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <Contacts />
        <article className={styles.dialogueContainer}>
          <Routes>
            <Route
              path="/"
              element={<div className={styles.emptyChat}>Choose chat</div>}
            />
            <Route path=":id" element={<Dialogue />} />
          </Routes>
        </article>
      </section>
      <StatusToastPortal />
    </div>
  );
}
