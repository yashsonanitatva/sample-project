import styled from 'styled-components';
import {Root, Thumb} from '@radix-ui/react-switch';

import {tokens} from '@theme/tokens';
import {toggleTheme} from './Toggle.theme';

export const StyledSwitch = styled(Root)`
  appearance: none;
  border: none;
  padding: ${tokens.sizes[0]};
  width: ${tokens.sizes[52]};
  min-width: ${tokens.sizes[52]};
  height: ${tokens.sizes[32]};
  background-color: ${toggleTheme.inactiveBackgroundColor};
  border-radius: ${tokens.sizes[60]};
  position: relative;

  &:focus {
    outline: none;
    box-shadow: ${tokens.sizes[0]} ${tokens.sizes[0]} ${tokens.sizes[0]}
      ${tokens.sizes[1]} ${toggleTheme.outlineColor};
  }

  &[data-state='checked'] {
    background-color: ${toggleTheme.activeBackgroundColor};
  }

  &:disabled {
    background-color: ${toggleTheme.disabledBackgroundColor};
  }
`;

export const StyledThumb = styled(Thumb)`
  display: block;
  width: ${tokens.sizes[28]};
  height: ${tokens.sizes[28]};
  background-color: ${toggleTheme.thumbBackgroundColor};
  border-radius: ${tokens.sizes.half};
  box-shadow: ${toggleTheme.shadowColor} ${tokens.sizes[0]} ${tokens.sizes[0]}
    ${tokens.sizes[2]};
  transition: transform ${tokens.transitionDurations.fast};
  will-change: transform;
  transform: translateX(${tokens.sizes[2]});

  &[data-state='checked'] {
    transform: translateX(${tokens.sizes[22]});
  }

  &:disabled {
    background-color: ${toggleTheme.disabledThumbBackgroundColor};
  }
`;
