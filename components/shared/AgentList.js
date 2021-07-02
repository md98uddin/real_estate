import * as React from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import { Tile, Rating } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { callNumber } from "../../utils";

const renderAgents = ({ item }, toggleTextModal) => {
  const callHandler = async (phone) => {
    callNumber(phone);
  };
  if (item) {
    return (
      <Tile
        imageSrc={item.image}
        title={`${item.title} \n - ${item.name}`}
        titleStyle={{ fontStyle: "italic", fontSize: 21 }}
        contentContainerStyle={styles.tileView}
        titleNumberOfLines={5}
        containerStyle={styles.tileContainer}
      >
        <View>
          <Text>{item.company}</Text>
          <Text>
            <Rating
              readonly
              ratingColor="#0057ad"
              type="custom"
              tintColor="white"
              imageSize={20}
              startingValue={item.rating}
              fractions={1}
            />
          </Text>
        </View>
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
            onPress={() => toggleTextModal(item.name, item.id, item.image)}
          />
        </View>
      </Tile>
    );
  }
};

const AgentList = ({ agents, toggleTextModal }) => {
  return (
    <FlatList
      data={agents}
      renderItem={(item) => renderAgents(item, toggleTextModal)}
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
  tileContainer: {
    height: 400,
    width: Platform.OS !== "android" ? 360 : 400,
    marginBottom: 12,
    borderBottomEndRadius: 40,
    borderWidth: 1,
    borderColor: "#0057ad",
  },
});
