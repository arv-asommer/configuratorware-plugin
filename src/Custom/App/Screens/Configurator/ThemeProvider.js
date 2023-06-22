import * as React from 'react';
import ConnectedThemeProvider from '@configuratorware/configurator-frontendgui/App/Screens/Configurator/ThemeProvider';
import merge from 'lodash/merge';

const customTheme = {
  overrides: {
    AmountPrice: {
      AmountPriceButton: {
        display: 'none',
      },
    },
    AmountInput: {
      amountInput: {
        display: 'none',
      },
      MuiTextFieldRoot: {
        display: 'none',
      },
    },
  },  
};

const overrideTheme = (theme) => {
  merge(theme.overrides, {});
};

export default ({ children }) => (
  <ConnectedThemeProvider customTheme={customTheme} withTheme={overrideTheme}>
    {children}
  </ConnectedThemeProvider>
);
