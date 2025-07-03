/**
 * Metro configuration for React Native
 * https://reactnative.dev/docs/metro
 */
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const config = {
  resolver: {
    // Polyfills for Node.js modules
    extraNodeModules: {
      crypto: path.resolve(__dirname, 'polyfills/crypto'),
      stream: path.resolve(__dirname, 'polyfills/stream'),
      buffer: path.resolve(__dirname, 'polyfills/buffer'),
      url: path.resolve(__dirname, 'polyfills/url'),
      http: path.resolve(__dirname, 'polyfills/http'),
      https: path.resolve(__dirname, 'polyfills/https'),
    },
    // Support for various file extensions
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'cjs', 'json'],
  },
  transformer: {
    // Custom transformer to handle import.meta
    babelTransformerPath: require.resolve('./transformers/import-meta-transformer'),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
