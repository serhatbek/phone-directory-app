import { useState, useEffect } from 'react';

import Form from './Form';
// import List from './List';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <Form addContacts={setContacts} oldContacts={contacts} />
    </div>
  );
};

export default Contacts;
