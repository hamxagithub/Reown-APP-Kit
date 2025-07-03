/**
 * Script to patch import.meta in node_modules
 * This script finds and replaces all occurrences of import.meta in the AppKit module
 */
const fs = require('fs');
const path = require('path');

// Path to the module containing import.meta
const modulePath = path.join(__dirname, 'node_modules/@reown/appkit-ethers-react-native');

// Process a single JavaScript file
function processFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace import.meta with global.__importMeta
      if (content.includes('import.meta')) {
        const updatedContent = content.replace(/import\.meta/g, 'global.__importMeta');
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✅ Fixed import.meta in: ${path.relative(__dirname, filePath)}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${path.relative(__dirname, filePath)}: ${error.message}`);
  }
}

// Process a directory recursively
function processDirectory(dirPath) {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        processDirectory(fullPath);
      } else if (entry.name.endsWith('.js')) {
        processFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${path.relative(__dirname, dirPath)}: ${error.message}`);
  }
}

// Start the process
console.log('🔄 Fixing import.meta references...');
processDirectory(modulePath);
console.log('✅ Done fixing import.meta references');
