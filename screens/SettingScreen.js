import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../components/Setting";

const SettingScreenStack = createStackNavigator();

const SettingStack = () => {
  return (
    <SettingScreenStack.Navigator>
      <SettingScreenStack.Screen name="Setting" component={Setting} />
    </SettingScreenStack.Navigator>
  );
};

export default SettingStack;
