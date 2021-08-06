import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const { palette } = tokens;

type LoginTheme = {
  backgroundColor: string;
  borderColor: string;
};

const loginTheme = createComponentTheme<LoginTheme>({
  dark: {
    backgroundColor: "transparent",
    borderColor: palette.grey[0],
  },
  light: {
    backgroundColor: "transparent",
    borderColor: palette.midnightBlue[0],
  },
});

export { loginTheme };
