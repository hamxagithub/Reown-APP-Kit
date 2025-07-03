# Simple Wallet Connection App

A minimalist React Native application that demonstrates how to connect to crypto wallets using Reown AppKit.

## Features

- Connect to various crypto wallets
- Display wallet address and chain ID
- Clean and simple user interface
- Support for multiple blockchain networks

## Project Structure

- `App.tsx` - Main application component
- `src/ConnectView.tsx` - Wallet connection user interface
- `src/appkitInit.js` - AppKit initialization
- `global.js` - Global polyfills for web compatibility
- `importMetaFix.js` - Polyfill for import.meta

## Getting Started

### Installation

```bash
npm install
```

This will install all dependencies and run the patch script to fix import.meta references.

### Running the App

```bash
# Start Metro Bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## Troubleshooting

If you encounter issues with `import.meta`, run:

```bash
npm run fix-import-meta
```

This script patches all occurrences of import.meta in the node_modules.
