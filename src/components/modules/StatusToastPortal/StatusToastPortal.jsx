import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeToast } from '../../../redux/actions/toastActions';
import StatusToast from '../StatusToast/StatusToast';
import styles from './StatusToastPortal.module.scss';

const StatusToastPortal = () => {
  const toast = useSelector((state) => state.toastReducer);
  const dispatch = useDispatch();
  const [removeId, setRemoveId] = React.useState('');
  const [loaded, setLoaded] = React.useState(false);
  const [portalId] = React.useState(`toast-portal-${React.useId()}}`);

  React.useEffect(() => {
    const element = document.createElement('div');
    element.id = portalId;
    document.body.appendChild(element);
    setLoaded(true);
    return () => document.body.removeChild(element);
  }, [portalId]);

  React.useEffect(() => {
    if (removeId) {
      dispatch(removeToast(removeId));
    }
  }, [removeId]);

  React.useEffect(() => {
    if (toast.length > 0) {
      setTimeout(() => setRemoveId(toast[toast.length - 1].id), 3000);
    }
  }, [toast]);

  return (
    loaded &&
    ReactDOM.createPortal(
      <div className={styles.wrapper}>
        {toast.map((toast) => {
          return <StatusToast key={toast.id} {...toast} />;
        })}
      </div>,
      document.getElementById(portalId)
    )
  );
};

export default StatusToastPortal;
