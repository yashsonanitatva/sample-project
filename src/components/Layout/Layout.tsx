import React, {FunctionComponent} from 'react';
import {LayoutContainer, MainContainer} from './Layout.styles';
import {LayoutProps} from './Layout.models';
import NavBar from '@components/NavBar';
import Login from '@components/Login';
import {useSelector} from 'react-redux';
import {RootState} from '@state/reducers';

const Layout: FunctionComponent<LayoutProps> = ({children}) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  return (
    <>
      <LayoutContainer data-testid="layout">
        {isLoggedIn ? (
          <>
            <NavBar />
            <MainContainer>{children}</MainContainer>{' '}
          </>
        ) : (
          <Login />
        )}
      </LayoutContainer>
    </>
  );
};

export default Layout;
