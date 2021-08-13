import React from 'react';

import {render} from '@test/utils';
import {tokens} from '@theme/tokens';
import {Button} from './Button';

const uid = 'button-test';

test('Button Test', () => {
  const {getByTestId, container} = render(<Button name="test">Hello</Button>);

  const buttonNode = getByTestId(uid);

  expect(buttonNode.textContent).toEqual('Hello');
  expect(container).toMatchSnapshot();
});

test('Button Loading Test', () => {
  const {getByTestId, container} = render(
    <Button name="test" busy={true}>
      Hello
    </Button>
  );

  const buttonNode = getByTestId(uid);

  expect(buttonNode.textContent).toEqual('');
  expect(container).toMatchSnapshot();
});

test('IconButton Test', async () => {
  const {getByTestId, container} = render(
    <Button name="test" variant="icon" label="Test" />
  );

  const roundedButtonContainerNode = getByTestId('button-test-container');
  const roundedButtonNode = getByTestId(uid);

  expect(roundedButtonContainerNode.textContent).toBe('Test');

  expect(roundedButtonNode).toHaveStyle({
    width: tokens.sizes[60],
    height: tokens.sizes[60]
  });
  expect(container).toMatchSnapshot();
});
