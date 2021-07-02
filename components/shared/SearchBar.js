import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import { Input } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SearchInput = () => {
  const [searchText, setSearchText] = React.useState("");

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        backgroundColor: "white",
      }}
    >
      <Input
        placeholder="Find something to your taste..."
        leftIcon={
          <FontAwesome
            name="search"
            style={{ padding: 3 }}
            size={15}
            color="#0057ad"
          />
        }
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        inputContainerStyle={{
          marginTop: 40,
        }}
      />
    </View>
  );
};

export default SearchInput;
