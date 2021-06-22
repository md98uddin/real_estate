import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

const AccountSettings = ({ accountInfo }) => {
  return (
    <View style={styles.view}>
      <Input
        label="Full Name"
        labelStyle={styles.labelStyle}
        inputContainerStyle={{ color: "#0057ad" }}
        containerStyle={styles.containerStyle}
        leftIcon={<FontAwesome name="user" />}
        leftIconContainerStyle={styles.leftIconStyle}
        value={accountInfo.name}
      />
      <Input
        label="Street Address"
        labelStyle={styles.labelStyle}
        containerStyle={styles.containerStyle}
        leftIcon={<FontAwesome name="map-marker" />}
        leftIconContainerStyle={styles.leftIconStyle}
        value={accountInfo.address}
      />
      <Input
        label="Email Address"
        labelStyle={styles.labelStyle}
        containerStyle={styles.containerStyle}
        leftIcon={<Entypo name="mail" />}
        leftIconContainerStyle={styles.leftIconStyle}
        value={accountInfo.email}
      />
      <Input
        label="Phone Number"
        labelStyle={styles.labelStyle}
        containerStyle={styles.containerStyle}
        leftIcon={<Entypo name="phone" />}
        leftIconContainerStyle={styles.leftIconStyle}
        value={accountInfo.phone}
      />
      <Input
        label="Country"
        labelStyle={styles.labelStyle}
        containerStyle={styles.containerStyle}
        leftIcon={<FontAwesome name="flag" />}
        disabled
        value={accountInfo.country}
        leftIconContainerStyle={styles.leftIconStyle}
      />
      <Button title="Save Changes" />
    </View>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  view: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerStyle: {
    borderWidth: 0,
    width: 250,
  },
  labelStyle: {
    color: "#0057ad",
    fontWeight: "normal",
  },
  leftIconStyle: {
    color: "red",
    padding: 5,
  },
});
