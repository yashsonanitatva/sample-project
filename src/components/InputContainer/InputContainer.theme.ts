import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const palette = tokens.palette;

type InputContainerTheme = {
  initial: {
    borderColor: string;
  };
  focused: {
    borderColor: string;
  };
  error: {
    borderColor: string;
  };
  disabled: {
    borderColor: string;
  };
};

const inputContainerTheme = createComponentTheme<InputContainerTheme>({
  dark: {
    initial: {
      borderColor: palette.grey[0],
    },
    focused: {
      borderColor: palette.mango[0],
    },
    error: {
      borderColor: palette.red[1],
    },
    disabled: {
      borderColor: palette.grey[4],
    },
  },
  light: {
    initial: {
      borderColor: palette.midnightBlue[0],
    },
    focused: {
      borderColor: palette.mango[0],
    },
    error: {
      borderColor: palette.red[1],
    },
    disabled: {
      borderColor: palette.grey[5],
    },
  },
});

export { inputContainerTheme };
