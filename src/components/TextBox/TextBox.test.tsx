import { render } from '@test/utils';

import TextBox from './TextBox';

test('TextBox should render', () => {
  const { getByTestId, container } = render(<TextBox firstProp="a" secondProp="b">Hello</TextBox>);

  const textBoxNode = getByTestId('text-box');

  expect(textBoxNode).toBeVisible();
  expect(textBoxNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});

// Add your tests
