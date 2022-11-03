import { useState } from 'react';
import { FormBox, Label, Input, Button, Box, InputBox } from './SignIn.styled';
import { useDispatch } from 'react-redux';
import { register } from 'components/redux/auth/auth-operation';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
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
      case 'name':
        setName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ email, name, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <Box>
      <FormBox onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <InputBox>
          <Label>
            <p>Email</p>
            <Input
              name="email"
              placeholder="Enter email"
              type="email"
              value={email}
              onChange={handleChange}
            />
          </Label>
          <Label>
            <p>Name</p>
            <Input
              name="name"
              placeholder="Enter Name"
              type="text"
              value={name}
              onChange={handleChange}
            />
          </Label>
        </InputBox>
        <Label>
          <p>Password</p>
          <Input
            name="password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Sign In</Button>
      </FormBox>
    </Box>
  );
};
