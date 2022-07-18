import { useState, useEffect } from 'react';
import './styles.css';

import List from './List';
import Form from './Form';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Züleyha',
      phone_number: '65756447',
    },
    {
      fullname: 'Melike',
      phone_number: '45756756',
    },
    {
      fullname: 'Bahar',
      phone_number: '57765776',
    },
  ]);

  useEffect(() => {
    // console.log('useEffect contacts', contacts);
  }, [contacts]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
