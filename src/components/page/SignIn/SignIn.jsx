import { Formik } from 'formik';
import { FormBox, Label, Input, Button, Box } from './SignIn.styled';

export const SignIn = () => {
  return (
    <Box>
      <Formik initialValues={initialValues}>
        <FormBox action="">
          <h2>Sign In</h2>
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

          <Button>Sign In</Button>
        </FormBox>
      </Formik>
    </Box>
  );
};

const initialValues = {
  email: '',
  password: '',
};
