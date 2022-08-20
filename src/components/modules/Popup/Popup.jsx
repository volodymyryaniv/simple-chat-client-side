import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { setPopup } from '../../../redux/actions/userActions';
import styles from './Popup.module.scss';

function Popup({ open, setOpen, children }) {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = React.useState(false);
  const [portalId] = React.useState(`toast-portal-${React.useId()}}`);

  React.useEffect(() => {
    const element = document.createElement('div');
    element.id = portalId;
    document.body.appendChild(element);
    setLoaded(true);
    return () => document.body.removeChild(element);
  }, []);

  return (
    loaded &&
    open &&
    ReactDOM.createPortal(
      <section
        className={styles.wrapper}
        onClick={() => dispatch(setPopup(false))}
      >
        <article
          className={styles.container}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button className={styles.button} onClick={() => setOpen(false)}>
            Later
          </button>
        </article>
      </section>,
      document.getElementById(portalId)
    )
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.userReducer.openPopup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOpen: (value) => dispatch(setPopup(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
