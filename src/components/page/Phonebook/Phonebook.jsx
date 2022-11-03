import { Wrapper } from './Phonebook.styled';
import { AddContact } from './AddContact/AddContact';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Phonebook() {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <Wrapper>
      <AddContact />

      <ContactList contacts={contacts} />
      <ToastContainer limit={1} />
    </Wrapper>
  );
}
