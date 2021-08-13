import styled from 'styled-components';

import {tokens} from '@theme/tokens';
import {InputContainerProps} from './InputContainer.models';
import {inputContainerTheme} from './InputContainer.theme';

// Need to shorten line size, so ts-styled-plugin doesn't freak out
const Z = `${tokens.sizes[0]} ${tokens.sizes[2]} ${tokens.sizes[0]} ${tokens.sizes[0]}`;

const getBorderColor = (
  focused: boolean,
  error: boolean,
  disabled: boolean
) => {
  if (disabled) {
    return inputContainerTheme.disabled.borderColor;
  }

  if (error) {
    return inputContainerTheme.error.borderColor;
  }

  if (focused) {
    return inputContainerTheme.focused.borderColor;
  }

  return inputContainerTheme.initial.borderColor;
};

export const InputContainerStyled = styled.div<InputContainerProps>`
  transition: box-shadow ease ${tokens.transitionDurations.base};
  box-shadow: ${Z} ${(p) => getBorderColor(p.focused, p.error, p.disabled)};
  display: flex;
`;
