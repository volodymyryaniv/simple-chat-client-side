import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPopup, logOut } from '../../../redux/actions/userActions';
import UserPhoto from '../../modules/UserPhoto/UserPhoto';
import Login from '../../Login/Login';
import styles from './ContactsHeader.module.scss';
import Popup from '../../modules/Popup';

export default function ContactsHeader({ filter, setFilter }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const isAuthorized = user.token;

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem('user');
  };

  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserPhoto src={user.user.photo} />
        {isAuthorized && <p className={styles.name}>{user.user.name}</p>}
        {isAuthorized ? (
          <button className={styles.button} onClick={handleLogOut}>
            Log out
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => dispatch(setPopup(true))}
          >
            Log in
          </button>
        )}
      </div>
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
      <Popup children={<Login />} />
    </div>
  );
}
