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
      tabBarOptions={{
        activeTintColor: "black",
      }}
      sceneContainerStyle={{ justifyContent: "center" }}
    >
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="search"
              style={{
                color: "#0057ad",
              }}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Agent"
        component={AgentStack}
        options={{
          tabBarLabel: "Agents",
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="black-tie"
              style={{
                color: "#0057ad",
              }}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused, size }) => (
            <Entypo
              name="chat"
              style={{
                color: "#0057ad",
              }}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStack}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="sliders"
              style={{
                color: "#0057ad",
              }}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
