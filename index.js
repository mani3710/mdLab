/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Root from './src/navigation';

AppRegistry.registerComponent(appName, () => Root);
