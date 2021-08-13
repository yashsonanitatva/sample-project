import {Meta} from '@storybook/react/types-6-0';

import {templateForComponent} from '@lib/templateHelper';
import {Button} from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button
};

export default meta;

const template = templateForComponent(Button, {
  layout: 'padded',
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/SL6C1iH3IFIQmw1zzEJEdH/Geometry-Web?node-id=479%3A68'
  },
  sharedProps: {}
});

export const Primary = template({
  label: 'Primary',
  name: 'Story'
});

export const Pill = template({
  label: 'Add people',
  name: 'Story',
  variant: 'pill',
  disabled: false,
  busy: false
});
