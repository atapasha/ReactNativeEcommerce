import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layouts/Layout";
import Categories from "../components/category/Categories";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Header from "../components/Layouts/Header";
const Home = () => {
  return (
    <Layout>
      <Categories />
      <Header />

      <View style={styles.container}>
        <Products />
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
