import { fireEvent, render } from '@test/utils';
import Toggle from './Toggle';

test('Toggle Test', () => {
  const { getByTestId, container } = render(<Toggle name="test">Hello</Toggle>);

  const toggleNode = getByTestId('test') as HTMLButtonElement;

  expect(toggleNode).toHaveAttribute('data-state', 'unchecked');

  fireEvent.click(toggleNode);

  expect(toggleNode).toHaveAttribute('data-state', 'checked');

  expect(container).toMatchSnapshot();
});
