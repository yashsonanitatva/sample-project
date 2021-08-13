import {render} from '@test/utils';

import Login from './Login';

test('Login should render', () => {
  const {getByTestId, container} = render(
    <Login firstProp="a" secondProp="b">
      Hello
    </Login>
  );

  const loginNode = getByTestId('login');

  expect(loginNode).toBeVisible();
  expect(loginNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});

// Add your tests
