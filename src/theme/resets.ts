import { css } from 'styled-components';

import { globalStyleTheme } from './globalStyle';
import { tokens } from './tokens';

export const inputReset = css`
  background: transparent;
  border: none;

  font-size: ${tokens.textSizes.normal.fontSize};
  color: ${globalStyleTheme.color};

  &:focus {
    outline: none;
  }

  &[type='number']::-webkit-inner-spin-button {
    appearance: none;
    margin: ${tokens.sizes[0]};
  }
  &[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: ${tokens.sizes[0]};
  }
`;

export const buttonReset = css`
  background: none;
  padding: 0;
  border: 0;
  box-shadow: none;

  &:hover {
    cursor: pointer;
  }
`;

export const listReset = css`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
`;
