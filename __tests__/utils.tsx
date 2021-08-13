import React, {FC, ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';

import {Except} from 'type-fest';

const AllTheProviders: FC = ({children}) => {
  return (
    <ThemeProvider theme={{currentTheme: 'dark'}}>{children}</ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Except<RenderOptions, 'queries'>
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';

export {customRender as render};
