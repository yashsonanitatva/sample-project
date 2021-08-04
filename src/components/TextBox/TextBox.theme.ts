import { createComponentTheme } from '@theme/createComponentTheme';
import { tokens } from '@theme/tokens';

const { palette } = tokens;

type TextBoxTheme = {
  backgroundColor: string;
};

const textBoxTheme = createComponentTheme<TextBoxTheme>({
  'dark': {
    backgroundColor: palette.mango[0],
  },
  'light': {
    backgroundColor: palette.skyBlue[9],
  },
});

export { textBoxTheme };
