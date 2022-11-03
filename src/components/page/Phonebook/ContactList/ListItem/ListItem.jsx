import { ItemList, Item, Button, ButtonBox } from './ListItem.styled';
import { ImBin, ImPencil } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'components/redux/contacts/contacts-operation';
import { useState } from 'react';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';

export const List = ({ contacts }) => {
  const dispatch = useDispatch();
  const [contactToUpdate, setContactToUpdate] = useState(null);

  const showUpdateForm = userId => {
    const contact = contacts.find(({ id }) => id === userId);
    setContactToUpdate(contact);
  };

  const closeForm = () => {
    setContactToUpdate(null);
  };
  return (
    <ItemList>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name}: <span>{number}</span>
          </p>
          <ButtonBox>
            <Button onClick={() => showUpdateForm(id)}>
              <ImPencil />
            </Button>
            <Button onClick={() => dispatch(deleteContacts(id))}>
              <ImBin />
            </Button>
          </ButtonBox>
          {contactToUpdate && contactToUpdate.id === id && (
            <UpdateForm contacts={contactToUpdate} closeForm={closeForm} />
          )}
        </Item>
      ))}
    </ItemList>
  );
};
