import type { Preview } from '@storybook/react';
import '../src/styles/app.css'
import { IntlProvider } from 'react-intl';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const preview: Preview = {
  decorators: [
    (Story: React.JSXElementConstructor<any>) => (<MemoryRouter >
        <IntlProvider locale='en-gb' >
          <Story />  
        </IntlProvider>
      </MemoryRouter>)
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
