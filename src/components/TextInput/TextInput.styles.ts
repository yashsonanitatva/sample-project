import styled, { css } from "styled-components";

import { tokens } from "@theme/tokens";
// import { mq } from "@theme/mediaQueries";
import { HtmlInputProps, TextLabelProps } from "./TextInput.models";
import { textInputTheme } from "./TextInput.theme";
import { textInputTokens } from "./TextInput.tokens";
import { mq } from "@theme/mediaQueries";

export const TextInputContainer = styled.div<{ $fullWidth?: boolean }>`
  width: fit-content;
  ${(p) =>
    p.$fullWidth &&
    css`
      width: ${tokens.sizes.full};
    `}
`;

export const InputStyle = styled.div`
  position: relative;
  width: ${tokens.sizes.full};
  display: flex;
  justify-content: space-between;
`;

export const InfoLabel = styled.label`
  font-size: ${tokens.textSizes.info.fontSize};
  font-weight: ${tokens.fontWeights.normal};
  padding-left: ${tokens.sizes[12]};
  padding-right: ${tokens.sizes[12]};
  padding-top: ${tokens.sizes[5]};
  display: inline-block;
  color: ${textInputTheme.infoLabel};
  word-break: break-all;
  max-width: ${tokens.sizes.full};
`;

export const InputLabel = styled.label<TextLabelProps>`
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(${tokens.sizes.full} - ${tokens.sizes[24]});
  left: ${tokens.sizes[12]};
  top: ${tokens.sizes.half};
  font-size: ${tokens.textSizes.normal.fontSize};
  font-weight: ${tokens.fontWeights.normal};
  line-height: 1.4;
  transform: translateY(-${tokens.sizes.half});
  transform-origin: center left;
  color: ${(p) =>
    p.disabled
      ? textInputTheme.disabled.placeholderColor
      : p.error
      ? textInputTheme.error.placeholderColor
      : textInputTheme.initial.placeholderColor};

  transition-property: transform, top, letter-spacing;
  transition-duration: ${tokens.transitionDurations.base};
  transition-timing-function: ease;

  ${(p) =>
    p.active &&
    css`
      top: ${tokens.sizes[0]};
      letter-spacing: ${textInputTokens.letterSpacing};
      transform: translateY(${tokens.sizes[0]}) scale(0.8125);
    `}
`;

export const AccessoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HtmlInput = styled.input<HtmlInputProps>`
  ${(p) =>
    p.readOnly &&
    css`
      caret-color: transparent;
    `}

  width: calc(98.5vw);
  height: ${tokens.sizes.full};
  padding: ${tokens.sizes[24]} ${tokens.sizes[12]} ${tokens.sizes[8]}
    ${tokens.sizes[12]};
  color: ${textInputTheme.initial.valueColor};

  ${mq(480)} {
    width: ${(p) =>
      p.fullWidth
        ? css`
            width: ${tokens.sizes.full};
          `
        : `calc(${tokens.sizes[444]}`};
  }

  &:disabled {
    color: ${textInputTheme.disabled.valueColor};
  }

  &::placeholder {
    opacity: 0;
  }
`;
