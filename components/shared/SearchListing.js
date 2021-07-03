import * as React from "react";
import { ScrollView, Text, FlatList, StyleSheet } from "react-native";
import { Card, Image } from "react-native-elements";

const renderHouses = ({ item }, toggleHouseView) => {
  if (item) {
    return (
      <ScrollView contentContainerStyle={styles.view}>
        <Card.Image source={item.image} />
        <Card>
          <Card.Title>{`${item.name} \n ${item.address}`} </Card.Title>
          <Card.Divider />
        </Card>
      </ScrollView>
    );
  }
};

const SearchListing = ({ houses, toggleHouseView }) => {
  return (
    <FlatList
      data={houses}
      renderItem={(item) => renderHouses(item, toggleHouseView)}
      keyExtractor={(item) => item.id}
      style={{ marginTop: 5 }}
    />
  );
};

export default SearchListing;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    borderWidth: 0,
  },
});
