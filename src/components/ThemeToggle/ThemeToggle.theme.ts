import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const palette = tokens.palette;

type ThemeToggleTheme = {
  backgroundColor: string;
  currentColor: string;
};

const themeToggleTheme = createComponentTheme<ThemeToggleTheme>({
  dark: {
    backgroundColor: palette.white[0],
    currentColor: palette.midnightBlue[0],
  },
  light: {
    backgroundColor: palette.midnightBlue[0],
    currentColor: palette.white[0],
  },
});

export { themeToggleTheme };
