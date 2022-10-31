import { Button, Input, Label, FormBox, Error, Box } from './AddContact.styled';
import { Formik, ErrorMessage } from 'formik';

export const AddContact = () => {
  return (
    <Box>
      <h2>Phonebook</h2>
      <Formik initialValues={initialValues}>
        <FormBox action="">
          <Label htmlFor="name">
            <p>Name</p>
            <Input
              name="name"
              type="text"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Enter name"
            />
            <ErrorMessage name="name">
              {() => <Error>Name must be at least 4 characters</Error>}
            </ErrorMessage>
          </Label>

          <Label htmlFor="number">
            <p>Number</p>
            <Input
              type="tel"
              name="number"
              country="US"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              maxLength="16"
              placeholder="_(___)___-____"
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormBox>
      </Formik>
    </Box>
  );
};

const initialValues = {
  name: '',
  number: '',
};
