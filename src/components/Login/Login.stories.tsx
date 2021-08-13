import {Meta} from '@storybook/react/types-6-0';

import {templateForComponent} from '@lib/templateHelper';

import Login from './Login';

const meta: Meta = {
  title: 'Components/Login',
  component: Login
};

export default meta;

const template = templateForComponent(Login, {
  layout: 'padded',
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/…'
  },
  sharedProps: {
    userName: 'a',
    password: 'test'
  }
});

export const Default = template({});
