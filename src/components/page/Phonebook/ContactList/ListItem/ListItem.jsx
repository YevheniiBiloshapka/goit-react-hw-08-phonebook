import { ItemList, Item, Button, ButtonBox } from './ListItem.styled';
import { ImBin, ImPencil } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'components/redux/contacts/contacts-operation';

export const List = ({ contacts, showUpdateForm }) => {
  const dispatch = useDispatch();

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
        </Item>
      ))}
    </ItemList>
  );
};
