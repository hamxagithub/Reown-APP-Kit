import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { 
  useAppKit, 
  useAppKitAccount, 
  useDisconnect 
} from "@reown/appkit-ethers-react-native";

export default function ConnectView() {
  const { open } = useAppKit();
  const { address, isConnected, chainId } = useAppKitAccount();
  const { disconnect } = useDisconnect();


  const shortenedAddress = address ? 
    `${address.slice(0, 6)}...${address.slice(-4)}` : '';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Connection</Text>
      
      <TouchableOpacity 
        style={styles.connectButton}
        onPress={() => isConnected ? disconnect() : open()}
      >
        <Text style={styles.buttonText}>
          {isConnected ? "Disconnect Wallet" : "Connect Wallet"}
        </Text>
      </TouchableOpacity>
      
      {isConnected && (
        <View style={styles.infoContainer}>
          <Text style={styles.addressText}>
            {shortenedAddress}
          </Text>
          <Text style={styles.networkText}>
            Chain ID: {chainId || 'Unknown'}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#56a2dcff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  connectButton: {
    backgroundColor: "#05792aff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 15,
    width: "70%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  infoContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  addressText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 5,
  },
  networkText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  }
});