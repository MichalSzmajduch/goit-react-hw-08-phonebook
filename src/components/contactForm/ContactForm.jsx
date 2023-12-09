import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import s from './ContactForm.module.css';
import { addContactsThunk, getContactsThunk } from 'redux/constants';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(state => state.contacts.items);
  return (
    <div className={s.wrapper}>
      <h2>Add Contact</h2>
      <form
        className={s.submit}
        onSubmit={e => {
          const contact = {
            name: name,
            phone: number,
          };
          e.preventDefault();
          if (
            contacts.some(
              value =>
                value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
            )
          ) {
            alert(`${name} is alredy in contacts`);
          } else {
            dispatch(addContactsThunk(contact));
          }
          reset();
        }}
      >
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          required
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <input
          className={s.input}
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={number}
          onChange={handleChange}
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <div>
          <button className={s.btnAfter} type="submit">
            ADD CONTACT
          </button>
        </div>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactForm;
