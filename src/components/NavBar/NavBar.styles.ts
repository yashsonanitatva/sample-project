import styled from 'styled-components';
import {Navbar} from 'react-bootstrap';
import {navBarTheme} from './NavBar.theme';

export const NavBarContainer = styled(Navbar)`
  background-color: ${navBarTheme.backgroundColor};
  flex: 1;
`;

export const NavBarWrapper = styled.div`
  display: block;
  width: 100%;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  line-height: 40px;
  margin-right: 4px;
  &:hover {
    color: white;
  }
`;

export const Title = styled(NavLink)`
  margin-right: 30px;
  font-size: 20px;
`;
