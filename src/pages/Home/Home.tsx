import React from "react";
import { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Head from "next/Head";
import "./Home.i18n";
import { Content } from "./Home.styles";
import TextBox from "@components/TextBox";

const Home: NextPage = () => {
  const { t } = useTranslation("Home", { useSuspense: false });
  return (
    <Content>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <h2>Home</h2>
      <TextBox />
    </Content>
  );
};
export default Home;
