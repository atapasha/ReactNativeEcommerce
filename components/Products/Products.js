import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProductsCard from "./ProductsCard";
import { produtsData } from "../../data/ProductsData";
const Products = () => {
  return (
    <>
      <View style={styles.container}>
        {produtsData.map((p) => (
          <ProductsCard key={p._id} p={p} />
        ))}
      </View>
    </>
  );
};

styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Products;
