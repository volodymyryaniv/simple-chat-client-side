import React from 'react';
import { connect } from 'react-redux';
import Message from '../../modules/Message/Message';
import UserPhoto from '../../modules/UserPhoto/UserPhoto';
import styles from './DialogueBody.module.scss';

function DialogueBody({ src, dialogue }) {
  const dialogueRef = React.useRef()

  React.useEffect(() => {
    dialogueRef.current.scrollTo(0,window.innerHeight);
  },[dialogue])

  return (
    <div className={styles.container} ref={dialogueRef}>
      {dialogue &&
        dialogue.map((message) => {
          return message.sender === 'user' ? (
            <Message key={message.id} position="right" {...message} />
          ) : (
            <div key={message.id} className={styles.messageContainer}>
              <UserPhoto src={src} verified={false} />
              <Message position="left" {...message} />
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dialogue: state.contactsReducer.openedChat.dialogue,
    src: state.contactsReducer.openedChat.photo,
  };
};

export default connect(mapStateToProps)(DialogueBody);
