import * as React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";

const TextModal = ({ isModalOpen, toggleTextModal, agent }) => {
  const [height, setHeight] = React.useState(200);
  const [message, setMessage] = React.useState("");

  return (
    <View style={styles.view}>
      <Modal
        animationType="slide"
        transparent
        visible={isModalOpen}
        onRequestClose={() => toggleTextModal("md", "fsfsdfsfsd", agent.image)}
      >
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.header}>To: {agent.name}</Text>
            <Avatar rounded source={agent.image} size={40} />
          </View>
          <Input
            placeholder={`Write a message to ${agent.name}...`}
            autoFocus
            numberOfLines={8}
            multiline={true}
            maxLength={400}
            style={{ ...styles.inputStyle, height: height }}
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <View style={styles.buttonView}>
            <Button
              title="Send"
              containerStyle={styles.buttonContainer}
              raised
              buttonStyle={{ backgroundColor: "#0057ad" }}
            />
            <Button
              title="Exit"
              onPress={() =>
                toggleTextModal("md", "dfsndfksdfnsdk", agent.image)
              }
              containerStyle={styles.buttonContainer}
              raised
              type="outline"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TextModal;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonView: {
    flexDirection: "row",
    margin: 5,
  },
  header: {
    marginTop: 10,
    fontSize: 18,
    color: "#0057ad",
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputStyle: {
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top",
    borderColor: "#f2f3f5",
    marginTop: 10,
    elevation: 2,
  },
  buttonContainer: { margin: 5 },
});
