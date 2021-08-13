import {createComponentTheme} from '@theme/createComponentTheme';
import {tokens} from '@theme/tokens';

const palette = tokens.palette;

type ToggleTheme = {
  inactiveBackgroundColor: string;
  activeBackgroundColor: string;
  thumbBackgroundColor: string;
  outlineColor: string;
  disabledThumbBackgroundColor: string;
  disabledBackgroundColor: string;
  shadowColor: string;
};

const toggleTheme = createComponentTheme<ToggleTheme>({
  dark: {
    inactiveBackgroundColor: palette.grey[4],
    activeBackgroundColor: palette.mango[0],
    thumbBackgroundColor: palette.midnightBlue[0],
    outlineColor: palette.mango[0],
    disabledThumbBackgroundColor: palette.grey[7],
    disabledBackgroundColor: palette.grey[4],
    shadowColor: `${tokens.palette.black[0]}${tokens.alpha[30]}`
  },
  light: {
    inactiveBackgroundColor: palette.grey[4],
    activeBackgroundColor: palette.mango[0],
    thumbBackgroundColor: palette.white[0],
    outlineColor: palette.mango[0],
    disabledThumbBackgroundColor: palette.grey[0],
    disabledBackgroundColor: palette.grey[2],
    shadowColor: `${tokens.palette.black[0]}${tokens.alpha[30]}`
  }
});

export {toggleTheme};
