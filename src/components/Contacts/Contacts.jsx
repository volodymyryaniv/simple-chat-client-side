import React from 'react';
import { connect } from 'react-redux';
import { setList } from '../../redux/actions/contactsActions';
import ContactsHeader from './ContactsHeader';
import ContactsList from './ContactsList';
import styles from './Contacts.module.scss';

function Contacts({ user, contacts }) {
  const [filter, setFilter] = React.useState('');
  const filteredList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <div className={styles.container}>
      <ContactsHeader src={user.photo} filter={filter} setFilter={setFilter} />
      <ContactsList contacts={filteredList} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    contacts: state.contactsReducer.contacts,
  };
};

export default connect(mapStateToProps)(Contacts);
