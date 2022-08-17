import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getContactById } from '../../redux/actions/contactsActions';
import DialogueHeader from './DialogueHeader';
import DialogueBody from './DialogueBody';
import DialogueFooter from './DialogueFooter';
import styles from './Dialogue.module.scss';

function Dialogue({ openedChat, getCurrentChat }) {
  const id = useParams().id;

  React.useEffect(() => {
    getCurrentChat(id);
  }, [id]);

  return (
    openedChat && (
      <article className={styles.container}>
        <DialogueHeader name={openedChat.name} src={openedChat.photo} />
        <DialogueBody />
        <DialogueFooter id={id} />
      </article>
    )
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer.contacts,
    openedChat: state.contactsReducer.openedChat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentChat: (id) => dispatch(getContactById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogue);
