/**
 * import.meta polyfill
 * This defines global.__importMeta as a substitute for import.meta
 * which is not supported in React Native's Hermes engine
 */

if (typeof global.__importMeta === 'undefined') {
  global.__importMeta = { url: 'react-native://' };
}
