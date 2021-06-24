import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Collapsible from "react-native-collapsible";

const AccountSettings = ({ accountInfo, isCollapsed }) => {
  const [updatedInfo, setAccountInfo] = React.useState(accountInfo);

  return (
    <Collapsible collapsed={isCollapsed[0]} style={styles.collapseView}>
      <Input
        label="Full Name"
        labelStyle={styles.labelStyle}
        inputContainerStyle={{ color: "#0057ad" }}
        containerStyle={styles.containerStyle}
        leftIcon={<FontAwesome name="user" />}
        leftIconContainerStyle={styles.leftIconStyle}
        onChangeText={(name) =>
          setAccountInfo((prevState) => ({ ...prevState, name }))
        }
        value={updatedInfo.name}
      />
      <Input
        label="Street Address"
        labelStyle={styles.labelStyle}
        containerStyle={styles.containerStyle}
        leftIcon={<FontAwesome name="map-marker" />}
        leftIconContainerStyle={styles.leftIconStyle}
        onChangeText={(address) =>
          setAccountInfo((prevState) => ({ ...prevState, address }))
        }
        value={updatedInfo.address}
      />
      <Input
        label="Email Address"
        labelStyle={styles.labelStyle}
        containerStyle={styles.containerStyle}
        leftIcon={<Entypo name="mail" />}
        leftIconContainerStyle={styles.leftIconStyle}
        onChangeText={(email) =>
          setAccountInfo((prevState) => ({ ...prevState, email }))
        }
        value={updatedInfo.email}
      />
      <Input
        label="Phone Number"
        labelStyle={styles.labelStyle}
        containerStyle={styles.containerStyle}
        leftIcon={<Entypo name="phone" />}
        leftIconContainerStyle={styles.leftIconStyle}
        onChangeText={(phone) =>
          setAccountInfo((prevState) => ({ ...prevState, phone }))
        }
        value={updatedInfo.phone}
      />
      <Input
        label="Country"
        labelStyle={styles.labelStyle}
        containerStyle={styles.containerStyle}
        leftIcon={<FontAwesome name="flag" />}
        disabled
        value={updatedInfo.country}
        leftIconContainerStyle={styles.leftIconStyle}
      />
      <Button title="Save Changes" />
    </Collapsible>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  collapseView: { height: 550, marginBottom: 100, marginTop: 20 },
  view: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 1000,
  },
  containerStyle: {
    borderWidth: 0,
    width: 250,
    color: "#0057ad",
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
