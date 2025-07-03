/**
 * Custom transformer for handling import.meta
 * Replaces all import.meta occurrences with global.__importMeta
 */
const { transform } = require('@react-native/metro-babel-transformer');

module.exports.transform = async (props) => {
  const originalCode = props.src;
  
  // Replace import.meta with global.__importMeta
  if (originalCode.includes('import.meta')) {
    props.src = originalCode.replace(/import\.meta/g, 'global.__importMeta');
  }
  
  return await transform(props);
};
