/**
 * Babel configuration for React Native
 */
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Transform import.meta with our custom plugin
    [require.resolve('./transformers/babel-plugin-transform-import-meta')]
  ],
};
