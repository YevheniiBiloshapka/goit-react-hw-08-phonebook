import { FormBox, Label, Input, Button, Box } from './LoginIn.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'components/redux/auth/auth-operation';

export const LoginIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box>
      <FormBox onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Label>
          <p>Email</p>
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <p>Password</p>
          <Input
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Login</Button>
      </FormBox>
    </Box>
  );
};
