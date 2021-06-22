import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Agent from "../components/Agent";

const AgentScreenStack = createStackNavigator();

const AgentStack = () => {
  return (
    <AgentScreenStack.Navigator>
      <AgentScreenStack.Screen name="Agent" component={Agent} />
    </AgentScreenStack.Navigator>
  );
};

export default AgentStack;
