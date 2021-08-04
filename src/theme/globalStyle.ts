import { createGlobalStyle, css } from "styled-components";
import { createComponentTheme } from "./createComponentTheme";
import { tokens } from "./tokens";

type GlobalStyleTheme = {
  backgroundColor: string;
  color: string;
  mark: string;
};

export const globalStyleTheme = createComponentTheme<GlobalStyleTheme>({
  dark: {
    backgroundColor: tokens.palette.midnightBlue[1],
    color: tokens.palette.grey[0],
    mark: tokens.palette.mango[0],
  },
  light: {
    backgroundColor: tokens.palette.grey[0],
    color: tokens.palette.midnightBlue[1],
    mark: tokens.palette.mango[0],
  },
});

/** Using css gives formatting */
export const styles = css`
  * {
    font-family: "Times New Roman", sans-serif;
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    font-size: 1rem;
    font-family: "Times New Roman", sans-serif;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  html {
    display: flex;
    min-height: ${tokens.sizes.full};
  }

  body,
  #__next,
  main {
    display: flex;
    flex: 1;
    height: auto;
    min-height: auto;
  }

  /* Set core body defaults */
  body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: none;
    background-color: ${globalStyleTheme.backgroundColor};
    color: ${globalStyleTheme.color};
    overflow-x: hidden;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: ${tokens.sizes.full};
    display: block;
  }

  mark {
    background-color: ${globalStyleTheme.mark};
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
${styles}
`;

export { GlobalStyle };
