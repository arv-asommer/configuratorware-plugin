import * as React from 'react';
import CustomThemeProvider from './ThemeProvider';
import { ConnectedConfiguratorScreen } from '@configuratorware/configurator-frontendgui/App/Screens/Configurator/Screen';

export default props => (
    <ConnectedConfiguratorScreen
        {...props}
        ThemeProvider={CustomThemeProvider}
    />
);