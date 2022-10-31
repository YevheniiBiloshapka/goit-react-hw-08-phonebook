import {
  List,
  ListItem,
  Button,
  Label,
  Input,
  Box,
} from './ContactList.styled';
import { ImBin } from 'react-icons/im';
import { nanoid } from 'nanoid';

export const ContactList = () => {
  return (
    <Box>
      <h2>Contacts</h2>
      <Label htmlFor="">
        <p>Find contacts by name</p>
        <Input type="text" id="filter" placeholder="Enter name"></Input>
      </Label>
      <List>
        {visualContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <Button>
              <ImBin />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const visualContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];
