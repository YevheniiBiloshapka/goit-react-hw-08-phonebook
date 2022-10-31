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
import avatar from 'components/images/avatar.png';
import {
  ImAddressBook,
  ImUser,
  ImHangouts,
  ImCalendar,
  ImExit,
} from 'react-icons/im';

export const NavBar = () => {
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
          <Exit to={`/`}>
            <ImExit />
            Log out
          </Exit>
        </Nav>
      </SideBar>
      <Box>
        <Header>
          <h3>Hello, Alexey👋 </h3>
          <Info>
            <Date>
              <ImCalendar />
              October 31,2022
            </Date>
            <User>
              <img src={avatar} alt="Avatar" />{' '}
              <p>Alexeykonstantinov@gmail.com</p>
            </User>
          </Info>
        </Header>
        <Outlet />
      </Box>
    </Wrapper>
  );
};

const navigation = [
  { link: '/nav/phonebook', name: 'Phonebook', icon: ImAddressBook },
  { link: '/nav/userInfo', name: 'User info', icon: ImUser },
  //   { link: '*', name: 'Feedback', icon: ImHangouts },
];