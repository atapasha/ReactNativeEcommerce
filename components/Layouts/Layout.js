import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <StatusBar />
      <View>{children}</View>

      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    width: "50%",
    felx: 1,
    justifyContent: "flex-end",
    zIndex: 111,
    borderWith: 1,
    borderColor: "ligthgray",
    positon: "absolute",
    bottom: 0,
    padding: 2,
  },
});

export default Layout;
