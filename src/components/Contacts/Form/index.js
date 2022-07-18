import { useState, useEffect } from 'react';

const initialValues = { fullname: '', phone_number: '' };

const Form = ({ addContact, contacts }) => {
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === '' || form.phone_number === '') {
      return false;
    }
    // console.log(form);

    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form__row'>
        <input
          name='fullname'
          placeholder='Full Name'
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>

      <div className='form__row'>
        <input
          name='phone_number'
          placeholder='Phone Number'
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>

      <div className='form__action'>
        <button>ADD</button>
      </div>
    </form>
  );
};

export default Form;
