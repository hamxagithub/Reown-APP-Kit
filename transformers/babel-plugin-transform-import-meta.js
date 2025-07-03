/**
 * Babel plugin to transform import.meta into global.__importMeta
 */
module.exports = function() {
  return {
    visitor: {
      MetaProperty(path) {
        if (path.node.meta.name === 'import' && path.node.property.name === 'meta') {
          path.replaceWithSourceString('global.__importMeta');
        }
      }
    }
  };
};
