import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import SearchStack from "../screens/SearchScreen";
import AgentStack from "../screens/AgentScreen";
import ChatStack from "../screens/ChatScreen";
import SettingStack from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      tabBarOptions={{
        activeTintColor: "#283B62",
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => <FontAwesome name="search" />,
        }}
      />
      <Tab.Screen
        name="Agents"
        component={AgentStack}
        options={{
          tabBarLabel: "Agents",
          tabBarIcon: ({ focused }) => <FontAwesome name="black-tie" />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused }) => <Entypo name="chat" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStack}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => <FontAwesome name="sliders" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
