import * as React from "react";
import { View, FlatList, StyleSheet, Platform } from "react-native";
import { Tile } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { callNumber } from "../../utils";

const renderAgents = ({ item }) => {
  const callHandler = async (phone) => {
    callNumber(phone);
  };
  if (item) {
    return (
      <Tile
        imageSrc={item.image}
        title={`${item.title} \n - ${item.name}`}
        titleStyle={{ fontStyle: "italic", fontSize: 21 }}
        contentContainerStyle={styles.titleView}
        titleNumberOfLines={5}
        containerStyle={styles.titleContainer}
      >
        <View style={styles.view}>
          <FontAwesome
            name="phone"
            style={{ width: 25, margin: 5, color: "#0057ad" }}
            size={25}
            onPress={() => callHandler(item.phone)}
          />
          <Entypo
            name="chat"
            style={{ width: 25, margin: 5, color: "#0057ad" }}
            size={25}
            onPress={() => console.log("pressed")}
          />
        </View>
      </Tile>
    );
  }
};

const AgentList = ({ agents }) => {
  return (
    <FlatList
      data={agents}
      renderItem={renderAgents}
      keyExtractor={(item) => item.id}
      style={{ marginTop: 5 }}
    />
  );
};

export default AgentList;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 0,
  },
  titleContainer: {
    height: 400,
    width: Platform.OS !== "android" ? 375 : 400,
    marginBottom: 25,
    borderBottomEndRadius: 40,
    borderWidth: 1,
    borderColor: "#0057ad",
  },
});
