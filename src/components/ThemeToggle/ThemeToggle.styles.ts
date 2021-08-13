import styled from 'styled-components';

import {tokens} from '@theme/tokens';
import {themeToggleTheme} from './ThemeToggle.theme';

export const ThemeToggleButton = styled.button`
  border-radius: ${tokens.sizes.half};
  width: ${tokens.sizes[28]};
  height: ${tokens.sizes[28]};

  background-color: ${themeToggleTheme.backgroundColor};
  box-shadow: rgba(240, 46, 170, 0.4) 0 0 0 ${tokens.sizes[1]},
    rgba(240, 46, 170, 0.3) 0 0 0 ${tokens.sizes[2]},
    rgba(240, 46, 170, 0.2) 0 0 0 ${tokens.sizes[3]},
    rgba(240, 46, 170, 0.1) 0 0 0 ${tokens.sizes[4]},
    rgba(240, 46, 170, 0.05) 0 0 0 ${tokens.sizes[5]};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${themeToggleTheme.currentColor};
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  bottom: ${tokens.sizes[0]};
  right: ${tokens.sizes[56]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${tokens.sizes[44]};
  box-shadow: ${tokens.sizes[0]} ${tokens.sizes[5]} ${tokens.sizes[14]}
    ${themeToggleTheme.currentColor} ${tokens.alpha[35]};
  background-color: ${themeToggleTheme.currentColor};
  border-radius: ${tokens.sizes[28]};
`;
