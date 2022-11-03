import { Box, Error } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from 'components/redux/contacts/contacts-filter.slice';
import { Spiner } from 'components/Spiner/spiner';
import { List } from './ListItem/ListItem';
import { Filter } from './Filter/Filter';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const onChangeInput = e => {
    const value = e.currentTarget.value;
    dispatch(onChangeFilter(value.toLowerCase()));
  };

  const visualContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <Box>
      <h2>Contacts</h2>
      {isLoading && <Spiner />}
      <Filter onChange={onChangeInput} />

      {Object.keys(contacts).length === 0 && (
        <Error>❌ Your query did not find anything</Error>
      )}
      <List contacts={visualContacts} />
    </Box>
  );
};
