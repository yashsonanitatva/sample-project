import styled, { css, keyframes } from "styled-components";
import { tokens } from "@theme/tokens";
import { ButtonProps, ButtonVariants } from "./Button.models";
import { buttonTheme } from "./Button.theme";
import { buttonTokens } from "./Button.tokens";
import { mq } from "@theme/mediaQueries";
import { buttonReset } from "@theme/resets";

export const ButtonContainer = styled.div<{
  $variant: ButtonVariants;
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${(p) =>
    p.$variant === "icon" &&
    css`
      flex-direction: column;
    `}
  ${(p) =>
    p.$fullWidth &&
    css`
      width: ${tokens.sizes.full};
    `}
`;

export const StyledButton = styled.button<ButtonProps>`
  ${buttonReset}
  transition-property: color, background-color, border-radius;
  transition-duration: ${tokens.transitionDurations.base};
  transition-timing-function: ease;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(p) =>
    p.roundedCorners ? tokens.sizes[4] : tokens.sizes[0]};
  width: ${(p) =>
    p.fullWidth
      ? tokens.sizes.full
      : p.variant === "squared"
      ? tokens.sizes[56]
      : p.variant === "link"
      ? "auto"
      : p.variant === "pill"
      ? tokens.sizes.full
      : css`calc(100vw - ${tokens.sizes[40]})`};
  height: ${(p) =>
    p.variant === "pill"
      ? tokens.sizes[48]
      : p.variant === "link"
      ? "auto"
      : tokens.sizes[56]};

  background-color: ${(p) =>
    p.disabled || p.busy
      ? buttonTheme[p.variant ?? "squared"].disabledBg
      : buttonTheme[p.variant ?? "squared"].backgroundColor};
  color: ${(p) =>
    p.disabled || p.busy
      ? buttonTheme[p.variant ?? "squared"].disabledLabel
      : buttonTheme[p.variant ?? "squared"].label};
  padding: ${(p) => (p.variant === "pill" ? `0 ${tokens.sizes[10]}` : "0")};

  ${(p) =>
    p.variant === "outlined"
      ? css`
          border: ${tokens.sizes[2]} solid ${buttonTheme.outlined.border};
        `
      : p.variant === "pill"
      ? css`
          border: ${tokens.sizes[2]} solid
            ${p.disabled || p.busy
              ? buttonTheme[p.variant ?? "squared"].disabledBorder
              : buttonTheme[p.variant ?? "squared"].border};
          border-radius: ${tokens.sizes[25]};
          font-size: ${tokens.sizes[14]};
          margin: ${tokens.sizes[25]} ${tokens.sizes[0]} ${tokens.sizes[25]}
            auto;
          svg {
            width: ${tokens.sizes[24]};
            height: ${tokens.sizes[24]};

            path {
              fill: ${buttonTheme[p.variant ?? "squared"].icon};
            }
          }
        `
      : css`
          border: none;
        `}

  ${mq(480)} {
    width: ${(p) =>
      p.fullWidth
        ? tokens.sizes.full
        : p.variant === "squared"
        ? tokens.sizes[56]
        : p.variant === "pill"
        ? "auto"
        : p.variant === "link"
        ? "auto"
        : buttonTokens.width};
    height: ${(p) =>
      p.variant === "pill"
        ? tokens.sizes[48]
        : p.variant === "link"
        ? "auto"
        : tokens.sizes[56]};
    min-width: ${(p) => (p.variant === "pill" ? tokens.sizes[148] : "auto")};
  }

  // Only apply hover styles in scenarios that support it i.e. a Desktop browser
  // Otherwise, this hover style will stick to the Button upon interaction and won't go away until you tap elsewhere
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(p) =>
        p.disabled || p.busy
          ? buttonTheme[p.variant ?? "squared"].disabledBg
          : buttonTheme[p.variant ?? "squared"].hoverBg};
      color: ${(p) =>
        p.disabled || p.busy
          ? buttonTheme[p.variant ?? "squared"].disabledLabel
          : buttonTheme[p.variant ?? "squared"].hoverLabel};
      border-color: ${(p) =>
        p.disabled || p.busy
          ? buttonTheme[p.variant ?? "squared"].disabledBorder
          : p.variant === "pill"
          ? buttonTheme[p.variant ?? "squared"].hoverBg
          : "none"};
      svg {
        path {
          fill: ${(p) => buttonTheme[p.variant ?? "squared"].iconHoverBg};
        }
      }
    }
  }

  &:focus {
    box-shadow: 0 0 0
      ${(p) => (p.variant === "pill" ? tokens.sizes[1] : "inset")}
      ${(p) => buttonTheme[p.variant ?? "squared"].focus};
    outline: none;
    ${(p) =>
      p.variant === "pill" &&
      css`
        border: ${tokens.sizes[4]} solid ${tokens.palette.white};
      `}
  }

  ${(p) =>
    p.variant === "icon" &&
    css`
      width: ${tokens.sizes[60]};
      height: ${tokens.sizes[60]};
      border-radius: ${tokens.sizes.half};

      svg {
        transition-property: fill;
        transition-duration: ${tokens.transitionDurations.base};
        transition-timing-function: ease;

        width: ${tokens.sizes[30]};
        height: ${tokens.sizes[30]};

        path {
          fill: ${buttonTheme[p.variant ?? "squared"].icon};
        }
      }

      ${mq(480)} {
        width: ${tokens.sizes[60]};
        height: ${tokens.sizes[60]};
      }

      ${mq(768)} {
        width: ${p.size === "default" ? tokens.sizes[40] : tokens.sizes[26]};
        height: ${p.size === "default" ? tokens.sizes[40] : tokens.sizes[26]};

        svg {
          width: ${p.size === "default" ? tokens.sizes[24] : tokens.sizes[16]};
          height: ${p.size === "default" ? tokens.sizes[24] : tokens.sizes[16]};
        }
      }
    `}
`;

export const ButtonText = styled.span`
  font-size: ${tokens.textSizes.normal.fontSize};
  font-weight: ${tokens.fontWeights.bold};
`;

export const IconLabel = styled.span<Pick<ButtonProps, "size">>`
  color: ${buttonTheme.icon.label};
  font-size: ${tokens.textSizes.info.fontSize};
  text-align: center;
  transition-property: font-size, color, opacity;
  transition-duration: ${tokens.transitionDurations.base};
  transition-timing-function: ease;
  margin-top: ${(p) => (p.size === "default" ? tokens.sizes[8] : 0)};
  opacity: ${(p) => (p.size === "default" ? 1 : 0)};
  pointer-events: ${(p) => (p.size === "default" ? "auto" : "none")};

  ${mq(768)} {
    font-size: ${(p) =>
      p.size === "default"
        ? tokens.textSizes.small.fontSize
        : tokens.textSizes.none.fontSize};
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ variant?: ButtonVariants }>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: ${tokens.sizes[2]} solid
    ${(p) => buttonTheme[p.variant ?? "contained"].barBackgroundColor};
  border-right: ${tokens.sizes[2]} solid
    ${(p) => buttonTheme[p.variant ?? "contained"].barBackgroundColor};
  border-bottom: ${tokens.sizes[2]} solid
    ${(p) => buttonTheme[p.variant ?? "contained"].barBackgroundColor};
  border-left: ${tokens.sizes[4]} solid
    ${(p) => buttonTheme[p.variant ?? "contained"].barColor};
  background: transparent;
  width: ${tokens.sizes[24]};
  height: ${tokens.sizes[24]};
  border-radius: ${tokens.sizes.half};
`;
