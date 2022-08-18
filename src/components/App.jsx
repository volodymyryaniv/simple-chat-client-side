import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useResizeWidth } from '../hooks/useResizeWidth';
import { setList } from '../redux/actions/contactsActions';
import { useSelector, useDispatch } from 'react-redux';
import Contacts from './Contacts';
import Dialogue from './Dialogue';
import StatusToastPortal from './modules/StatusToastPortal';
import styles from './App.module.scss';

export default function App() {
  const width = useResizeWidth();
  const contacts = useSelector((state) => state.contactsReducer.contacts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!localStorage.getItem('contacts')) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    const contactList = JSON.parse(localStorage.getItem('contacts'));
    dispatch(setList(contactList));
  }, []);

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        {width > 587 ? (
          <>
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
          </>
        ) : (
          <>
            <article className={styles.dialogueContainer}>
              <Routes>
                <Route path="/" element={<Contacts />} />
                <Route path=":id" element={<Dialogue />} />
              </Routes>
            </article>
          </>
        )}
      </section>
      <StatusToastPortal />
    </div>
  );
}
