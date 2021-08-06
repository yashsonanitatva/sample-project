import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";
import { ButtonVariants } from "./Button.models";

const palette = tokens.palette;

interface ButtonStyles {
  backgroundColor: string;
  label: string;
  hoverBg: string;
  hoverLabel: string;
  border: string;
  focus: string;
  disabledBg: string;
  disabledLabel: string;
  disabledBorder: string;
  icon: string;
  iconHoverBg: string;
  barBackgroundColor: string;
  barColor: string;
}

type ButtonTheme = {
  [key in ButtonVariants]: ButtonStyles;
};

export const buttonTheme = createComponentTheme<ButtonTheme>({
  light: {
    contained: {
      backgroundColor: palette.mango[0],
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: palette.grey[2],
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: palette.grey[3],
      barColor: palette.black[0],
    },
    outlined: {
      backgroundColor: "transparent",
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: palette.mango[0],
      focus: palette.white[0],
      disabledBg: palette.white[0],
      disabledLabel: palette.grey[6],
      disabledBorder: palette.grey[6],
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: palette.grey[3],
      barColor: palette.black[0],
    },
    squared: {
      backgroundColor: palette.mango[0],
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: palette.grey[2],
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: palette.grey[3],
      barColor: palette.black[0],
    },
    icon: {
      backgroundColor: palette.mango[0],
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: palette.grey[2],
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: "transparent",
      barColor: "transparent",
    },
    link: {
      backgroundColor: "transparent",
      label: palette.skyBlue[8],
      hoverBg: "transparent",
      hoverLabel: palette.skyBlue[8],
      border: "none",
      focus: palette.white[0],
      disabledBg: "transparent",
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: "transparent",
      barColor: "transparent",
    },
    pill: {
      backgroundColor: palette.grey[0],
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: palette.mango[0],
      focus: palette.mango[0],
      disabledBg: palette.grey[2],
      disabledLabel: palette.grey[6],
      disabledBorder: palette.grey[2],
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: "transparent",
      barColor: "transparent",
    },
  },
  dark: {
    icon: {
      backgroundColor: palette.mango[0],
      label: palette.grey[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: palette.grey[2],
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: "transparent",
      barColor: "transparent",
    },
    link: {
      backgroundColor: "transparent",
      label: palette.mango[0],
      hoverBg: "transparent",
      hoverLabel: palette.mango[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: "transparent",
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: "transparent",
      barColor: "transparent",
    },
    contained: {
      backgroundColor: palette.mango[0],
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: palette.grey[2],
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: palette.grey[3],
      barColor: palette.black[0],
    },
    outlined: {
      backgroundColor: "transparent",
      label: palette.mango[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: palette.mango[0],
      focus: palette.white[0],
      disabledBg: palette.white[0],
      disabledLabel: palette.grey[6],
      disabledBorder: palette.grey[6],
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: palette.grey[3],
      barColor: palette.black[0],
    },
    squared: {
      backgroundColor: palette.mango[0],
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: palette.grey[2],
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: palette.grey[3],
      barColor: palette.black[0],
    },
    pill: {
      backgroundColor: palette.midnightBlue[1],
      label: palette.mango[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: palette.mango[0],
      focus: palette.mango[0],
      disabledBg: palette.grey[6],
      disabledLabel: palette.white[0],
      disabledBorder: palette.grey[6],
      icon: palette.mango[0],
      iconHoverBg: palette.midnightBlue[0],
      barBackgroundColor: "transparent",
      barColor: "transparent",
    },
  },
});
