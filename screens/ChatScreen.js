import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../components/Chat";

const ChatScreenStack = createStackNavigator();

const ChatStack = () => {
  return (
    <ChatScreenStack.Navigator>
      <ChatScreenStack.Screen name="Chat" component={Chat} />
    </ChatScreenStack.Navigator>
  );
};

export default ChatStack;
