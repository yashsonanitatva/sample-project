import {Meta} from '@storybook/react/types-6-0';

import {templateForComponent} from '@lib/templateHelper';
import Toggle from './Toggle';

const meta: Meta = {
  title: 'Components/Toggle',
  component: Toggle
};

export default meta;

const template = templateForComponent(Toggle, {
  layout: 'padded',
  sharedProps: {
    name: 'toggle-story'
  }
});

export const Default = template({});
