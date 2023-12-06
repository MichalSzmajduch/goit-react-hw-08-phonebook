import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Contacts } from 'components/contacts/Contacts';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectGetContacts,
  selectGetFilter,
} from 'redux/reducers/contacts/selectors';
import { ContactForm } from 'components/contactForm/ContactForm';
import { Filter } from 'components/filter/Filter';
import { fetchContacts } from 'redux/reducers/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectGetContacts);
  const filter = useSelector(selectGetFilter);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <div>
      {isLoading && !error && <p>Loading...</p>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ul>
        {isLoading && !error && <p>Loading...</p>}
        {filteredContacts.map(contact => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};
