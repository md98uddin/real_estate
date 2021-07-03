import * as React from "react";
import { View, Text } from "react-native";
import SearchListing from "./shared/SearchListing";
import SearchInput from "./shared/SearchBar";

const SearchScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchInput />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <SearchListing />
      </View>
    </View>
  );
};

export default SearchScreen;
