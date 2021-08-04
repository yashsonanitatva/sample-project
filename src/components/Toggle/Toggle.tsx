import { FunctionComponent } from 'react';

import { StyledSwitch, StyledThumb } from './Toggle.styles';
import { ToggleProps } from './Toggle.models';

const Toggle: FunctionComponent<ToggleProps> = (props) => {
  const { name, ...rest } = props;

  return (
    <StyledSwitch aria-label="toggle" data-testid={name} id={name} {...rest}>
      <StyledThumb />
    </StyledSwitch>
  );
};

export default Toggle;
