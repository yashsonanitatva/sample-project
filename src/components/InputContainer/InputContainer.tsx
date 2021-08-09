import React, { FunctionComponent } from 'react';

import { InputContainerStyled } from './InputContainer.styles';
import { InputContainerProps } from './InputContainer.models';

/**
 * InputContainer is used to wrap to all input components to provide them with a consistent border
 * @example <InputContainer testId="bla"><YourInput/><InputContainer/>
 */
const InputContainer: FunctionComponent<InputContainerProps> = (props) => {
  const { error, disabled, focused, children } = props;

  return (
    <InputContainerStyled data-testid="input-container" error={error} disabled={disabled} focused={focused}>
      {children}
    </InputContainerStyled>
  );
};

export default InputContainer;
