import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import AgentList from "./shared/AgentList";
import TextModal from "./shared/TextModal";

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
    {
      id: "agent-4",
      name: "Lee Wok",
      title:
        "Find your dream home with poolside backyard, multifloor AC units, and much more.",
      image: require("../assets/images/agents/agent-4.jpg"),
      phone: "9156895823",
    },
  ];

  const [isModalOpen, setModal] = React.useState(false);
  const [agent, setAgent] = React.useState({
    name: "Md",
    id: "1d561651656",
    image: require("../assets/images/agents/agent-4.jpg"),
  });

  const toggleTextModal = (name, id, image) => {
    if (!isModalOpen) {
      setAgent({ name, id, image });
    }
    setModal(!isModalOpen);
  };

  console.log(agent);

  return (
    <View style={styles.view}>
      <Text style={styles.headers}>
        {agents.length < 100 ? agents.length : "99+"} Agents Near You
      </Text>
      <View style={styles.viewHorizontal} />
      <AgentList agents={agents} toggleTextModal={toggleTextModal} />
      <TextModal
        toggleTextModal={toggleTextModal}
        isModalOpen={isModalOpen}
        agent={agent}
      />
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
  viewHorizontal: {
    height: 1,
    width: Dimensions.get("screen").width * 0.9,
    marginBottom: 5,
    backgroundColor: "#0057ad",
    opacity: 0.5,
  },
  headers: {
    marginTop: 5,
    fontSize: 20,
    marginBottom: 5,
    color: "#0057ad",
    fontWeight: "bold",
  },
});
