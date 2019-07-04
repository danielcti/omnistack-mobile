/**
 * @format
 */

import {AppRegistry} from 'react-native';
console.disableYellowBox = true
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
