/**
 * Wallet App with Reown AppKit
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, SafeAreaView } from 'react-native';
import { AppKit } from '@reown/appkit-ethers-react-native';
import ConnectView from './src/ConnectView';

// AppKit is initialized in appkitInit.js before this file is loaded

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <ConnectView />
     
        <AppKit />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
});

export default App;
