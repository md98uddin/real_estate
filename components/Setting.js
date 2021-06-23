import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AccountSettings from "./shared/AccountSettings";

const SettingsScreen = () => {
  const accountInfo = {
    name: "John Doe",
    address: "3215 Lehman Avenue",
    email: "jdoe@hotmail.com",
    phone: "347-416-8693",
    country: "United States",
  };

  const [isCollapsed, setCollapse] = React.useState([false, false]);

  const toggleCollapse = (num) => {
    if (num == 0) {
      setCollapse([!isCollapsed[0], isCollapsed[1]]);
    } else {
      setCollapse([isCollapsed[0], !isCollapsed[1]]);
    }
  };

  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          onPress={() => toggleCollapse(0)}
          style={styles.opacityView}
        >
          <Text style={styles.headers}>Account Information</Text>
          <AntDesign name="caretdown" style={styles.dropDown} />
        </TouchableOpacity>
        <AccountSettings accountInfo={accountInfo} isCollapsed={isCollapsed} />
        <TouchableOpacity
          onPress={() => toggleCollapse(1)}
          style={styles.opacityView}
        >
          <Text style={styles.headers}>Search Settings</Text>
          <AntDesign name="caretdown" style={styles.dropDown} />
        </TouchableOpacity>
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
    marginTop: 5,
    fontSize: 18,
    color: "#0057ad",
    fontWeight: "bold",
  },
  opacityView: { flex: 1, flexDirection: "row" },
  dropDown: {
    marginTop: 12,
    marginLeft: 5,
    color: "#0057ad",
  },
});
