import { Formik } from 'formik';
import { FormBox, Label, Input, Button, Box } from './LogIn.styled';

export const LoginIn = () => {
  return (
    <Box>
      <Formik initialValues={initialValues}>
        <FormBox action="">
          <h2>Log in</h2>
          <Label htmlFor="email">
            <p>Email</p>
            <Input name="email" placeholder="Enter email" type="email" />
          </Label>
          <Label htmlFor="password">
            <p>Password</p>
            <Input
              name="password"
              placeholder="Enter password"
              type="password"
            />
          </Label>

          <Button to={`/nav/phonebook`}>Log in</Button>
        </FormBox>
      </Formik>
    </Box>
  );
};

const initialValues = {
  email: '',
  password: '',
};
