import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import AccountSettings from "./shared/AccountSettings";
import SearchSettings from "./shared/SearchSettings";

const SettingsScreen = () => {
  const accountInfo = {
    name: "John Doe",
    address: "3215 Lehman Avenue",
    email: "jdoe@hotmail.com",
    phone: "347-416-8693",
    country: "United States",
  };

  const searchSettings = {
    distance: 250,
    agentCanContact: false,
    showDistanceAndLocation: false,
    includeInBuyerDirectory: false,
  };

  const [isCollapsed, setCollapse] = React.useState([true, false]);

  const toggleCollapse = (num) => {
    if (num == 0) {
      setCollapse([!isCollapsed[0], isCollapsed[1]]);
    } else {
      setCollapse([isCollapsed[0], !isCollapsed[1]]);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          onPress={() => toggleCollapse(0)}
          style={styles.opacityView}
        >
          <Text style={styles.headers}>Account Information</Text>
          <AntDesign
            name={isCollapsed[0] ? "caretdown" : "caretup"}
            style={styles.dropDown}
            onPress={() => toggleCollapse(0)}
          />
        </TouchableOpacity>
        <AccountSettings accountInfo={accountInfo} isCollapsed={isCollapsed} />
        <TouchableOpacity
          onPress={() => toggleCollapse(1)}
          style={styles.opacityView}
        >
          <Text style={{ ...styles.headers, marginBottom: 10 }}>
            Search Settings
          </Text>
          <AntDesign
            name={isCollapsed[1] ? "caretdown" : "caretup"}
            style={styles.dropDown}
            onPress={() => toggleCollapse(1)}
          />
        </TouchableOpacity>
        <SearchSettings
          isCollapsed={isCollapsed}
          searchSettings={searchSettings}
        />
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
    marginTop: 10,
    fontSize: 18,
    color: "#0057ad",
    fontWeight: "bold",
  },
  opacityView: { flex: 1, flexDirection: "row" },
  dropDown: {
    marginTop: 16,
    marginLeft: 6,
    color: "#0057ad",
  },
});
