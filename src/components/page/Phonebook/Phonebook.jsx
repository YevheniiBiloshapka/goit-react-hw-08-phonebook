import { Wrapper } from './Phonebook.styled';
import { AddContact } from './AddContact/AddContact';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import { useState } from 'react';

export default function Phonebook() {
  const contacts = useSelector(state => state.contacts.contacts);
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const [id, setId] = useState(null);

  const showUpdateForm = userId => {
    const contact = contacts.find(contact => contact.id === userId);
    setContactToUpdate(contact);
    setId(userId);
  };

  const closeForm = () => {
    setContactToUpdate(null);
  };

  const isShow = contactToUpdate && contactToUpdate.id === id;
  return (
    <Wrapper>
      <AddContact />
      {isShow && (
        <UpdateForm contacts={contactToUpdate} closeForm={closeForm} />
      )}

      <ContactList contacts={contacts} showUpdateForm={showUpdateForm} />
      <ToastContainer limit={1} />
    </Wrapper>
  );
}
