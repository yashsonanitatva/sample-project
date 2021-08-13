import {Meta, Story} from '@storybook/react/types-6-0';
import {useState} from 'react';

import TextInput from './TextInput';

const meta: Meta = {
  title: 'Components/TextInput',
  component: TextInput
};

export default meta;

const TemplateControlled: Story = (storyArguments) => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      name="story"
      label="Testing"
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      {...storyArguments}
    />
  );
};

export const Controlled = TemplateControlled.bind({});

Controlled.parameters = {
  layout: 'padded'
};
