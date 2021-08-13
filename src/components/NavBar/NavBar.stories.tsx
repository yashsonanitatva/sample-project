import {Meta} from '@storybook/react/types-6-0';

import {templateForComponent} from '@lib/templateHelper';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const meta: Meta = {
  title: 'Components/NavBar',
  component: NavBar
};

export default meta;

const template = templateForComponent(NavBar, {
  layout: 'padded', // Fullscreen
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/…'
  },
  sharedProps: {}
});

export const Default = template({});
