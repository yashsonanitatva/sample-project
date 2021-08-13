import {createComponentTheme} from '@theme/createComponentTheme';
import {tokens} from '@theme/tokens';

const palette = tokens.palette;

type TextInputTheme = {
  infoLabel: string;
  initial: {
    placeholderColor: string;
    borderColor: string;
    valueColor: string;
  };
  focused: {
    borderColor: string;
  };
  error: {
    placeholderColor: string;
    borderColor: string;
  };
  disabled: {
    placeholderColor: string;
    borderColor: string;
    valueColor: string;
  };
};

const textInputTheme = createComponentTheme<TextInputTheme>({
  dark: {
    infoLabel: palette.grey[5],
    initial: {
      borderColor: palette.grey[0],
      valueColor: palette.grey[0],
      placeholderColor: palette.grey[4]
    },
    focused: {
      borderColor: palette.mango[0]
    },
    error: {
      borderColor: palette.red[1],
      placeholderColor: palette.red[1]
    },
    disabled: {
      borderColor: palette.grey[4],
      valueColor: palette.grey[4],
      placeholderColor: palette.grey[4]
    }
  },
  light: {
    infoLabel: palette.grey[5],
    initial: {
      borderColor: palette.midnightBlue[0],
      valueColor: palette.midnightBlue[0],
      placeholderColor: palette.grey[7]
    },
    focused: {
      borderColor: palette.mango[0]
    },
    error: {
      borderColor: palette.red[1],
      placeholderColor: palette.red[1]
    },
    disabled: {
      borderColor: palette.grey[5],
      valueColor: palette.grey[5],
      placeholderColor: palette.grey[5]
    }
  }
});

export {textInputTheme};
