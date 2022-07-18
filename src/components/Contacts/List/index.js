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

      <ul>
        {filteredList.map((contact, index) => (
          <li key={index}>
            {contact.fullname} {contact.phone_number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
