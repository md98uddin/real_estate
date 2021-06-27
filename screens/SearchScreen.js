import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../components/Search";

const SearchScreenStack = createStackNavigator();

const SearchStack = () => {
  return (
    <SearchScreenStack.Navigator initialRouteName="Search">
      <SearchScreenStack.Screen name="Search" component={Search} />
    </SearchScreenStack.Navigator>
  );
};

export default SearchStack;
