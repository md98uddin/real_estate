import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Slider, CheckBox, Button } from "react-native-elements";
import Collapsible from "react-native-collapsible";

const SearchSettings = ({ searchSettings, isCollapsed }) => {
  const [updatedSettings, setSettings] = React.useState(searchSettings);

  const handleChange = (checkBoxId) => {
    if (checkBoxId === "agentCanContact") {
      setSettings((prevState) => ({
        ...prevState,
        agentCanContact: !prevState.agentCanContact,
      }));
    } else if (checkBoxId === "showDistanceAndLocation") {
      setSettings((prevState) => ({
        ...prevState,
        showDistanceAndLocation: !prevState.showDistanceAndLocation,
      }));
    } else if (checkBoxId === "includeInBuyerDirectory") {
      setSettings((prevState) => ({
        ...prevState,
        includeInBuyerDirectory: !prevState.includeInBuyerDirectory,
      }));
    }
  };

  return (
    <Collapsible collapsed={isCollapsed[1]} style={styles.collapsedView}>
      <Text style={styles.textStyle}>Maximum Distance to Search</Text>
      <Slider
        value={updatedSettings.distance}
        onValueChange={(distance) =>
          setSettings((prevState) => ({ ...prevState, distance }))
        }
        maximumValue={500}
        minimumValue={1}
        step={1}
        thumbStyle={styles.thumbStyle}
        thumbTouchSize={{ width: 15, height: 15 }}
        thumbTintColor="#343400"
      />
      <Text style={{ ...styles.textStyle, alignSelf: "center", marginTop: 5 }}>
        {updatedSettings.distance} miles (mi)
      </Text>
      <CheckBox
        center
        title={
          <Text style={{ ...styles.textStyle, marginRight: 70 }}>
            Allow Agents To Contact Me
          </Text>
        }
        checked={updatedSettings.agentCanContact}
        iconRight
        containerStyle={styles.containerStyle}
        style={styles.textStyle}
        onPress={() => handleChange("agentCanContact")}
      />
      <CheckBox
        center
        title={
          <Text style={{ ...styles.textStyle, marginRight: 70 }}>
            Show Location and Distance
          </Text>
        }
        checked={updatedSettings.showDistanceAndLocation}
        iconRight
        containerStyle={styles.containerStyle}
        style={styles.textStyle}
        onPress={() => handleChange("showDistanceAndLocation")}
      />
      <CheckBox
        center
        title={
          <Text style={{ ...styles.textStyle, marginRight: 70 }}>
            Take Me Off Buyer Directory
          </Text>
        }
        checked={updatedSettings.includeInBuyerDirectory}
        iconRight
        containerStyle={styles.containerStyle}
        style={styles.textStyle}
        onPress={() => handleChange("includeInBuyerDirectory")}
      />
      <Button
        title="Update Preferences"
        buttonStyle={{ margin: 10, marginBottom: 30 }}
      />
      <Button
        title="Delete Account"
        buttonStyle={{ backgroundColor: "#f55442", margin: 10 }}
      />
      <Button title="Sign Out" buttonStyle={{ margin: 10 }} type="clear" />
    </Collapsible>
  );
};

export default SearchSettings;

const styles = StyleSheet.create({
  collapsedView: {
    height: 550,
    marginBottom: 100,
    marginTop: 15,
    alignItems: "stretch",
  },
  view: {
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    width: 250,
    marginBottom: 30,
  },
  containerStyle: {
    margin: 15,
    width: 250,
    backgroundColor: "#ffffff",
    borderWidth: 0,
  },
  labelStyle: {
    color: "#0057ad",
    fontWeight: "normal",
  },
  leftIconStyle: {
    color: "red",
    padding: 5,
  },
  thumbStyle: {
    backgroundColor: "#0057ad",
    width: 15,
    height: 15,
  },
  textStyle: {
    color: "#0057ad",
  },
});
