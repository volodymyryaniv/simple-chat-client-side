import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, sendAnswer } from '../../../redux/actions/contactsActions';
import styles from './DialogueFooter.module.scss';

export default function DialogueFooter({ id }) {
  const [message, setMessage] = React.useState('');
  const currentChat = useSelector((state) => state.contactsReducer.openedChat);
  const contacts = useSelector((state) => state.contactsReducer.contacts);
  const dispatch = useDispatch();

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(addMessage(id, message, 'user'));
      localStorage.setItem('contacts', JSON.stringify(contacts));
      dispatch(sendAnswer(id, currentChat.name, currentChat.photo));
      setMessage('');
    }
  };

  return (
    <form className={styles.container} onSubmit={sendMessage}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.sendButton}>
          <img
            type="submit"
            src="/icons/send.png"
            alt="Send icon"
            className={styles.icon}
          />
        </button>
      </div>
    </form>
  );
}
