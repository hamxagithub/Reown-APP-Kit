/**
 * Global shims and polyfills for React Native
 * These are needed for WalletConnect and other web-based libraries
 */
import 'react-native-get-random-values';
import { Buffer } from 'buffer';

// Define Buffer globally
global.Buffer = global.Buffer || Buffer;

// Define process.env if it doesn't exist
if (typeof process === 'undefined' || !process.env) {
  global.process = {
    ...(global.process || {}),
    env: {
      ...(global.process?.env || {}),
      NODE_ENV: __DEV__ ? 'development' : 'production',
    }
  };
}

// Define global objects needed by web libraries
global.self = global.self || global;
global.window = global.window || global;

// Define __importMeta for import.meta polyfill
global.__importMeta = {
  url: 'react-native://'
};

export default global;
