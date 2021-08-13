import React from 'react';
import {Story} from '@storybook/react';
import {Parameters} from '@storybook/react/types-6-0';
import {BaseDecorators} from '@storybook/addons';
import {StoryFnReactReturnType} from '@storybook/react/dist/ts3.9/client/preview/types';
import {Provider} from 'react-redux';
import {store} from '@state/store';

type CustomParameters<S> = Parameters & {
  children?: React.ReactNode;
  sharedProps: S;
  decorators?: BaseDecorators<StoryFnReactReturnType>;
};

export const templateForComponent = <P, S extends Partial<P>>(
  Component: (props: P) => JSX.Element | null,
  options?: CustomParameters<S>
) => (props: Omit<P, keyof S>): Story<Omit<P, keyof S>> => {
  const template: Story<P> = (templateArguments) => (
    <Provider store={store}>
      <Component {...options?.sharedProps} {...templateArguments}>
        {/* @ts-expect-error */}
        {options?.children ?? props?.children}
      </Component>
    </Provider>
  );
  const story = template.bind({}) as Story<typeof props>;
  story.args = props;
  story.parameters = options;
  story.decorators = options?.decorators;
  return story;
};
