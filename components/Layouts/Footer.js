import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRoute } from "@react-navigation/native";

const Footer = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert("Home oage")}
      >
        <AntDesign
          style={[styles.icon, route.name == "home" && styles.active]}
          name="home"
        />

        <Text style={[styles.iconText, route.name === "home" && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert("Notififaction")}
      >
        <AntDesign
          style={[styles.icon, route.name == "Notififaction" && styles.active]}
          name="bells"
        />

        <Text style={[styles.iconText, route.name === "home" && styles.active]}>
          Notififaction
        </Text>
      </TouchableOpacity>{" "}
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert("ACCOUNT PAGE")}
      >
        <AntDesign
          style={[styles.icon, route.name == "account" && styles.active]}
          name="user"
        />

        <Text
          style={[styles.iconText, route.name === "account" && styles.active]}
        >
          A ccount
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert("Home oage")}
      >
        <AntDesign
          style={[styles.icon, route.name == "cart" && styles.active]}
          name="shoppingcart"
        />

        <Text style={[styles.iconText, route.name === "cart" && styles.active]}>
          Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert("Log out oage")}
      >
        <AntDesign style={styles.icon} name="logout" />

        <Text style={styles.iconText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: 25,
    color: "#000000",
  },

  iconText: {
    color: "#000000",
    fontSize: 10,
  },

  active: {
    color: "blue",
  },
});
export default Footer;
