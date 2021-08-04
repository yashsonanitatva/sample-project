import { createComponentTheme } from '@theme/createComponentTheme';
import { tokens } from '@theme/tokens';

const { palette } = tokens;

type NavBarTheme = {
  backgroundColor: string;
};

const navBarTheme = createComponentTheme<NavBarTheme>({
  'dark': {
    backgroundColor: palette.mango[0],
  },
  'light': {
    backgroundColor: palette.skyBlue[9],
  },
});

export { navBarTheme };
