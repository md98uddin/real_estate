import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./navigations/BottomTabNav";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
