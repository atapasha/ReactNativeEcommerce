import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import FontAwsome from "react-native-vector-icons/FontAwesome";
const Header = () => {
  const [searchText, setSearchText] = useState("");
  //function  for search

  const handleSearch = () => {
    console.log(searchText);
  };
  return (
    <View style={{ height: 100 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={searchText}
          onChange={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <FontAwsome name="search" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0.5,
  },
  inputBox: {
    borderWidth: 4,
    width: "97%",
    position: "absolute",
    height: 31,
    color: "#000000",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 5,
    marginLeft: 3,
  },

  searchBtn: {
    position: "absolute",
    left: "90%",
  },
  icon: {
    color: "#000000",
    fontSize: 18,
  },
});

export default Header;
