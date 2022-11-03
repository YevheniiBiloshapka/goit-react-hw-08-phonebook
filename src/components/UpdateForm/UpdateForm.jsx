import { useDispatch } from 'react-redux';
import { updateContact } from 'components/redux/contacts/contacts-operation';
import {
  Button,
  Input,
  Label,
  FormBox,
  Error,
  Box,
  BtnExit,
  BackDrop,
} from './UpdateForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { InputNumber } from 'components/InputNumber/InputNumber';
import { ImCross } from 'react-icons/im';

export const UpdateForm = ({ contacts, closeForm }) => {
  const dispatch = useDispatch();
  const initialValues = {
    name: contacts.name,
    number: contacts.number,
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    dispatch(updateContact({ ...contacts, name, number }));
    closeForm();
    resetForm();
  };

  return (
    <BackDrop>
      <Box>
        <h2>Edit Contact</h2>
        <BtnExit onClick={closeForm}>
          <ImCross />
        </BtnExit>
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
            <Button type="submit">Save</Button>
          </FormBox>
        </Formik>
      </Box>
    </BackDrop>
  );
};

let schema = Yup.object().shape({
  name: Yup.string().min(4).max(32).required(),
  number: Yup.string().required('Required'),
});
