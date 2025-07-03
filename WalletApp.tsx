import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { AppKitButton, AppKit } from '@reown/appkit-ethers-react-native';
import ConnectView from './src/ConnectView';

function WalletApp() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ConnectView />
      <AppKit /> {/* This is the modal that will show available wallets */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WalletApp;
