/**
 * AppKit Initialization
 * This file initializes the AppKit before the application starts
 */

import { createAppKit, defaultConfig } from '@reown/appkit-ethers-react-native';

// Project ID from Reown Cloud
const projectId = "157d95826fc6be94fce9ac5e1d6f92ba";


const metadata = {
  name: "Simple Wallet App",
  description: "A simple wallet connection app",
  url: "https://reown.com/appkit",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "WALLETAPPKIT://",
  },
};

// Default configuration with metadata
const config = defaultConfig({ metadata });

// Supported blockchain networks
const chains = [
  {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  },
  {
    chainId: 137,
    name: "Polygon",
    currency: "MATIC",
    explorerUrl: "https://polygonscan.com",
    rpcUrl: "https://polygon-rpc.com",
  }
];

// Initialize AppKit
createAppKit({
  projectId,
  chains,
  config,
  enableAnalytics: true,
});
