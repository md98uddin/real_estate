import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AccountSettings from "./shared/AccountSettings";

const SettingsScreen = () => {
  const accountInfo = {
    name: "John Doe",
    address: "3215 Lehman Avenue",
    email: "jdoe@hotmail.com",
    phone: "347-416-8693",
    country: "United States",
  };

  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <Text style={styles.headers}>Account Information</Text>
        <AccountSettings accountInfo={accountInfo} />
        <Text style={styles.headers}>Search Settings</Text>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headers: {
    marginTop: 15,
    fontSize: 18,
    color: "#0057ad",
    fontWeight: "bold",
  },
});
