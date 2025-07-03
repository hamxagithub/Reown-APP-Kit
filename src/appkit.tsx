import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

// AppKit is already initialized in appkitInit.js which is imported in index.js
import { AppKit } from "@reown/appkit-ethers-react-native";

// Export component that includes AppKit modal
interface AppKitWrapperProps {
  children: ReactNode;
}

// Simple wrapper component to render children and AppKit modal
export default function AppKitWrapper({ children }: AppKitWrapperProps) {
  return (
    <>
      {children}
      <AppKit /> {/* This will render the modal */}
    </>
  );
}

const styles = StyleSheet.create({})