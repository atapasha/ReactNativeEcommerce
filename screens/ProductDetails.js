import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ProdutsData } from "../data/ProductsData";

const ProductDetails = ({ route }) => {
  const [pDetails, setPDetails] = useState({});

  const [qty, setQty] = useState(1);
  const { params } = route;

  //get product details  const { params } = route;

  useEffect(() => {
    //find product details

    const getProduct = ProdutsData.find((p) => {
      return p?._id === params?._id;
    });

    setPDetails(getProduct);
  }, [params?._id]);

  //handle function for - +

  const handleAddQty = () => {
    setQty((pre) => pre + 1);
  };

  return (
    <View>
      <Text>ProductDetails{params?._id}</Text>
      <Image source={{ uri: pDetails?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>Price:{pDetails?.price} $</Text>
        <Text style={styles.desc}>description:{pDetails?.description} </Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnCart}>
            <Text style={styles.btnCartText}>ADD TO CART</Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnQtyText}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.btnQtyText}>{qty}</Text>
            <TouchableOpacity style={styles.btnQtyText} onPress={handleAddQty}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },

  title: {
    fontSize: 18,
    textAlign: "left",
  },

  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },

  desc: {
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: "#000000",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },

  btnCartText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },

  bntQty: {
    backgroundColor: "lightgray",
    width: 30,
    alignItems: "center",
    marginHorizontal: 10,
  },

  btnQtyText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductDetails;
