import {Meta} from '@storybook/react/types-6-0';

import {templateForComponent} from '@lib/templateHelper';
import Layout from './Layout';

const meta: Meta = {
  title: 'Components/Layout',
  component: Layout
};

export default meta;

const template = templateForComponent(Layout, {
  layout: 'padded',
  sharedProps: {}
});

export const LayoutStory = template({});
