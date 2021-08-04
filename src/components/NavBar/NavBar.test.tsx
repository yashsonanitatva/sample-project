import { render } from '@test/utils';

import NavBar from './NavBar';

test('NavBar should render', () => {
  const { getByTestId, container } = render(<NavBar />);

  const navBarNode = getByTestId('nav-bar');

  expect(navBarNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
