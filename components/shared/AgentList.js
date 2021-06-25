import * as React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import { Tile } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { callNumber } from "../../utils";

const renderAgents = ({ item }) => {
  const callHandler = async (phone) => {
    const callStatus = callNumber(phone);
    if (!callStatus) {
      Alert.alert(
        "Calling is Not Possible",
        "The number is currently unavailable. Try the optional modes provided.",
        [
          {
            text: "Ok",
            style: "cancel",
          },
          {
            text: "Message",
          },
        ]
      );
    }
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
            style={{ width: 25, margin: 5 }}
            size={25}
            onPress={() => callHandler(item.phone)}
          />
          <Entypo
            name="chat"
            style={{ width: 25, margin: 5 }}
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
  },
  titleContainer: {
    height: 400,
    width: 400,
    marginBottom: 10,
    backgroundColor: "#f2f0f0",
  },
});
