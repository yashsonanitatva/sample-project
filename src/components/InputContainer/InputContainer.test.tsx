import React from 'react';

import { render } from '@test/utils';
import { tokens } from '@theme/tokens';
import InputContainer from './InputContainer';

const defaultProps = {
  focused: false,
  disabled: false,
  error: false,
};

test('InputContainer Test', () => {
  const { getByTestId, container } = render(<InputContainer {...defaultProps} />);

  const inputContainerNode = getByTestId('input-container');

  expect(inputContainerNode).toHaveStyle({ boxShadow: `0 ${tokens.sizes[2]} 0 0 ${tokens.palette.grey[0]}` });

  expect(container).toMatchSnapshot();
});
