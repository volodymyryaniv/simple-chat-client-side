import React from 'react';
import { useDispatch } from 'react-redux';
import { removeToast } from '../../../redux/actions/toastActions';
import UserPhoto from '../UserPhoto/UserPhoto';
import styles from './StatusToast.module.scss';

const StatusToast = ({ id, message, name, src }) => {
  const dispatch = useDispatch();

  const onRemoveToast = (id) => {
    dispatch(removeToast(id));
  };
  return (
    <div className={styles.toastContainer}>
      <UserPhoto src={src} />
      <div className={styles.statusText}>
        <p>{name}</p>
        <p>{message}</p>
      </div>
      <img
        className={styles.remove}
        src={'/icons/removecross.svg'}
        alt="close cross"
        onClick={() => onRemoveToast(id)}
      />
    </div>
  );
};

export default StatusToast;
