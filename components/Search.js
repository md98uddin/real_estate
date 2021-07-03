import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchListing from "./shared/SearchListing";
import SearchInput from "./shared/SearchBar";

const SearchScreen = () => {
  const houses = [
    {
      id: "house-1",
      name: "Beverly Hills Mansion",
      address: "2586 Beverly Road",
      state: "CA",
      postedBy: "agent-1",
      postedOn: "01/30/2021",
      image: require("../assets/images/houses/house-1.jpg"),
      price: 3750000,
    },
    {
      id: "house-2",
      name: "Gun Hill Manor",
      address: "1758 Gun Hill Rd",
      state: "NY",
      postedBy: "agent-2",
      postedOn: "04/10/2021",
      image: require("../assets/images/houses/house-2.jpg"),
      price: 1850000,
    },
    {
      id: "house-3",
      name: "Washington Fort",
      address: "2518 Canerie Canal",
      state: "WA",
      postedBy: "agent-2",
      postedOn: "6/15/2021",
      image: require("../assets/images/houses/house-3.jpg"),
      price: 2750000,
    },
    {
      id: "house-4",
      name: "Southside Barn",
      address: "1475 Canersie Rd",
      state: "MT",
      postedBy: "agent-4",
      postedOn: "03/30/2021",
      image: require("../assets/images/houses/house-4.jpg"),
      price: 5250000,
    },
    {
      id: "house-5",
      name: "Huntington Blvd Suite",
      address: "5862 11th St",
      state: "OK",
      postedBy: "agent-3",
      postedOn: "5/10/2021",
      image: require("../assets/images/houses/house-5.jpg"),
      price: 4175000,
    },
  ];

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
        <View style={styles.view}>
          <SearchListing houses={houses} />
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  view: {
    marginBottom: 5,
  },
});
