import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </Layout>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
