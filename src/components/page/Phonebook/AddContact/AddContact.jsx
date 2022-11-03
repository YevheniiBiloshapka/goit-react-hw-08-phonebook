import { Button, Input, Label, FormBox, Error, Box } from './AddContact.styled';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'components/redux/contacts/contacts-operation';
import { messageError } from 'components/messageNotify/message';
import { InputNumber } from 'components/InputNumber/InputNumber';

export const AddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const newContact = {
      name: name,
      number: number,
    };
    if (
      contacts.some(
        contact =>
          contact.number.toLocaleLowerCase() === number.toLocaleLowerCase()
      )
    ) {
      messageError(newContact);
      return;
    } else {
      dispatch(addContacts(newContact));
      resetForm();
    }
  };
  return (
    <Box>
      <h2>Phonebook</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
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
            <InputNumber />
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

let schema = Yup.object().shape({
  name: Yup.string().min(4).max(32).required(),
  number: Yup.string().required('Required'),
});
