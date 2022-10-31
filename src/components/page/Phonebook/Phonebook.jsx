import { Wrapper } from './Phonebook.styled';
import { AddContact } from './AddContact/AddContact';
import { ContactList } from './ContactList/ContactList';

export default function Phonebook() {
  return (
    <Wrapper>
      <AddContact />
      <ContactList />
    </Wrapper>
  );
}
