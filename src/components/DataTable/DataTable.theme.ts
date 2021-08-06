import { createComponentTheme } from '@theme/createComponentTheme';
import { tokens } from '@theme/tokens';

const { palette } = tokens;

type DataTableTheme = {
  backgroundColor: string;
};

const dataTableTheme = createComponentTheme<DataTableTheme>({
  'dark': {
    backgroundColor: palette.mango[0],
  },
  'light': {
    backgroundColor: palette.skyBlue[9],
  },
});

export { dataTableTheme };
