import { select } from "@storybook/addon-knobs";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/theme/globalStyle";

const themes = {
  light: { currentTheme: "light" },
  dark: { currentTheme: "dark" },
};

const themeNames = Object.keys(themes);

const GlobalKnob = ({ children }) => {
  const theme = select("Theme", themeNames, themeNames[0], "Themes");

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const globalDecorator = (storyFunction) => (
  <GlobalKnob>{storyFunction()}</GlobalKnob>
);

export default globalDecorator;
