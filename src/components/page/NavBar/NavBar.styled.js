import styled from 'styled-components';
import logo from 'components/images/logo.svg';
import NavActive from 'components/images/NavActive.svg';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`;

export const SideBar = styled.aside`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 236px;
  height: 100vh;
  left: 0px;
  top: 0px;

  color: #fff;
  background: #324a98;
  border-radius: 0px 30px 30px 0px;
`;

export const Logo = styled.div`
  width: 100px;
  height: 30px;
  margin: 33px 0 40px 40px;

  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  padding-left: 20px;
  padding-bottom: 16px;
`;
export const Item = styled.li`
  width: 236px;
  height: 56px;
`;
export const Link = styled(NavLink)`
  padding-left: 18px;
  width: 216px;
  height: 56px;
  gap: 7px;
  display: flex;
  align-items: center;

  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 137%;
  & svg {
    width: 24px;
    height: 24px;
  }

  &.active {
    color: #1f3349;
    background-image: url(${NavActive});
    background-repeat: no-repeat;
    background-size: left center;
  }
`;

export const Exit = styled(NavLink)`
  padding-left: 18px;
  width: 216px;
  height: 56px;
  gap: 7px;
  display: flex;
  align-items: center;

  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 137%;
  & svg {
    width: 24px;
    height: 24px;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px 48px;
  gap: 32px;
`;

export const Header = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  gap: 8px;
  padding-right: 16px;
  border-right: 1px solid #8c91a3;
  line-height: 137%;
  & svg {
    width: 18px;
    height: 18px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  & img {
    width: 32px;
    height: 32px;

    background: url(.png);
    border-radius: 3px;
  }
`;
