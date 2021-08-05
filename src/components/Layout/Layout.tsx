import React, { FunctionComponent, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import "./Layout.i18n";

import {
  LayoutContainer,
  MainContainer,
  SignedOutContainer,
} from "./Layout.styles";
import { LayoutProps } from "./Layout.models";
import NavBar from "@components/NavBar";

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const { t } = useTranslation("Layout", { useSuspense: false });
  const router = useRouter();

  return (
    <>
      {/* {userInfo ? ( */}
      <LayoutContainer data-testid="layout">
        <NavBar />
        <MainContainer>{children}</MainContainer>
      </LayoutContainer>
      {/* )
       : (
        <SignedOutContainer>{children}</SignedOutContainer>
      )} */}
    </>
  );
};

export default Layout;
