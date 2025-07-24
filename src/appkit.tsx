import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';


import { AppKit } from "@reown/appkit-ethers-react-native";


interface AppKitWrapperProps {
  children: ReactNode;
}

export default function AppKitWrapper({ children }: AppKitWrapperProps) {
  return (
    <>
      {children}
      <AppKit /> {}
    </>
  );
}

const styles = StyleSheet.create({})