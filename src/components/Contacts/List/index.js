import { useState } from 'react';

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState('');

  const filteredList = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log(filteredList);

  return (
    <div>
      <input
        placeholder='Filter Contacts'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className='list'>
        {filteredList.map((contact, index) => (
          <li key={index}>
            <span>Name: {contact.fullname}</span>
            <span>Number: {contact.phone_number}</span>
          </li>
        ))}
      </ul>

      <p>Total Contacts ({filteredList.length})</p>
    </div>
  );
};

export default List;
