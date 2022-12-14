import {
  SideBar,
  Logo,
  Box,
  Button,
  Navigation,
  Wrapper,
} from './AuthNavigation.styled.';
import { Outlet } from 'react-router-dom';

const AuthNavigation = () => {
  return (
    <Wrapper>
      <SideBar>
        <Box>
          <Logo>Logo</Logo>
          <p>System for doing homework using React and Redax</p>
        </Box>

        <Navigation>
          <Button to="/" end>
            Login
          </Button>
          <Button to="signin">Sign In</Button>
        </Navigation>
      </SideBar>
      <Outlet />
    </Wrapper>
  );
};

export default AuthNavigation;
