import styled from 'styled-components';

import { navBarTheme } from './NavBar.theme';

export const NavBarContainer = styled.div`
  background-color: ${ navBarTheme.backgroundColor};
  flex: 1;
`;

export const NavBarWapper = styled.div`
	display: block; 
	width: 100%;
`;