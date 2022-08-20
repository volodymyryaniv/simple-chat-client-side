import React from 'react';
import { connect } from 'react-redux';
import ContactsHeader from './ContactsHeader';
import ContactsList from './ContactsList';
import styles from './Contacts.module.scss';

function Contacts({ contacts }) {
  const [filter, setFilter] = React.useState('');
  const filteredList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <div className={styles.container}>
      <ContactsHeader filter={filter} setFilter={setFilter} />
      <ContactsList contacts={filteredList} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer.contacts,
  };
};

export default connect(mapStateToProps)(Contacts);
