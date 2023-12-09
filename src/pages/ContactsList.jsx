import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from '../redux/constants';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filtered = useSelector(state => state.filter);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };
  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <Filter />
      <Contacts listContact={filterContact()} />
    </div>
  );
};

export default ContactsList;
