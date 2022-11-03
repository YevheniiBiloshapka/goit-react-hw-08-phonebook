import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  SideBar,
  Logo,
  Nav,
  Link,
  Item,
  Exit,
  Box,
  Header,
  Info,
  Date,
  User,
} from './NavBar.styled';
import { randomAvatar } from 'components/randomAvatar/randomAvatar';
import { ImAddressBook, ImUser, ImCalendar, ImExit } from 'react-icons/im';
import { getCurrentDate } from 'components/utils/getCurrentDate';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorEmail,
  selectorName,
} from 'components/redux/auth/auth-selector';
import { logout } from 'components/redux/auth/auth-operation';

export const NavBar = () => {
  const name = useSelector(selectorName);
  const email = useSelector(selectorEmail);
  const dispatch = useDispatch();
  const date = getCurrentDate();

  return (
    <Wrapper>
      <SideBar>
        <Logo />
        <Nav>
          <ul>
            {navigation.map(({ link, name, icon: Icon }) => {
              return (
                <Item key={name}>
                  <Link to={link} end>
                    <Icon />
                    {name}
                  </Link>
                </Item>
              );
            })}
          </ul>
          <Exit onClick={() => dispatch(logout())} to={`/`}>
            <ImExit />
            Log out
          </Exit>
        </Nav>
      </SideBar>
      <Box>
        <Header>
          <h3>Hello, {name}👋 </h3>
          <Info>
            <Date>
              <ImCalendar />
              {date}
            </Date>
            <User>
              <img src={randomAvatar} alt="Avatar" /> <p>{email}</p>
            </User>
          </Info>
        </Header>
        <Outlet />
      </Box>
    </Wrapper>
  );
};

const navigation = [
  { link: '/auth', name: 'User info', icon: ImUser },
  { link: '/auth/phonebook', name: 'Phonebook', icon: ImAddressBook },
];
