import * as React from "react";
import { View, Text } from "react-native";
import SearchBar from "./SearchBar";

const SearchListing = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Search Listings</Text>
    </View>
  );
};

export default SearchListing;
