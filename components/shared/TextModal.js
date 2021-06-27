import * as React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

const TextModal = ({ isModalOpen, toggleTextModal }) => {
  return (
    <View style={styles.view}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalOpen}
        onRequestClose={() => toggleTextModal()}
        style={{ height: 200 }}
      >
        <View style={styles.view}>
          <Text>To: John Smith</Text>
          <Input
            placeholder="Write a message to John Smith..."
            numberOfLines={8}
            multiline={true}
            maxLength={250}
          />
          <Button title="Send" />
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
  },
});
