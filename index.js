/**
 * @format
 * Entry point for the wallet app
 */

// Import polyfills first
import './importMetaFix';
import './global';
import 'react-native-get-random-values';
import '@walletconnect/react-native-compat';

// Initialize AppKit before anything else
import './src/appkitInit';

// Register the main app component
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
