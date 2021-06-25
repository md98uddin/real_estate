import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import AgentList from "./shared/AgentList";

const AgentScreen = () => {
  const agents = [
    {
      id: "agent-1",
      name: "Kyle Landon",
      title:
        "Whether it's in the mounted coast, barren plains, let me help you find your next home.",
      image: require("../assets/images/agents/agent-1.jpg"),
      phone: "3478561586",
    },
    {
      id: "agent-2",
      name: "Jessica Casa",
      title:
        "Enjoy life out in a ranch, or at a beach side resort this upcoming summer.",
      image: require("../assets/images/agents/agent-2.jpg"),
      phone: "8451473586",
    },
    {
      id: "agent-3",
      name: "Jawad Hamza",
      title:
        "From the east to west coast, we have you covered at the best prices in both ends.",
      image: require("../assets/images/agents/agent-3.jpg"),
      phone: "3475104274",
    },
  ];

  return (
    <View style={styles.view}>
      <Text style={styles.headers}>Agents Near You</Text>
      <AgentList agents={agents} />
    </View>
  );
};

export default AgentScreen;

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  headers: {
    marginTop: 10,
    fontSize: 20,
    marginBottom: 5,
    color: "#0057ad",
    fontWeight: "bold",
  },
});
