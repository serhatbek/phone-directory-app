import { useState, useEffect } from 'react';

const firstValue = { fullname: '', phone_number: '' };

const Form = ({ addContacts, oldContacts }) => {
  const [form, setForm] = useState(firstValue);

  useEffect(() => {
    setForm(firstValue);
  }, [oldContacts]);

  const onInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === '' || form.phone_number === '') {
      return false;
    }

    addContacts([...oldContacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form__row'>
        <input
          name='fullname'
          placeholder='Enter Your Name'
          autoComplete='off'
          value={form.fullname}
          onChange={onInputChange}
        />
      </div>
      <div className='form__row'>
        <input
          name='phone_number'
          placeholder='Enter Your Surname'
          autoComplete='off'
          value={form.phone_number}
          onChange={onInputChange}
        />
      </div>
      <div className='form__action'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
