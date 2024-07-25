import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const ProductsCard = ({ p }) => {
  const navigation = useNavigation();

  //more details button

  const handleMoreButton = (id) => {
    navigation.navigate("productDetails", { _id: id });
    console.log(id);
  };

  //ADD TO CARD
  const handleAddToCart = () => {
    alert("Item added to card");
  };
  return (
    <View style={styles.card}>
      <View>
        <Image style={styles.cardImage} source={{ uri: p?.imageUrl }} />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>{p?.description}</Text>
      </View>
      <View style={styles.BtnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleMoreButton(p._id)}
        >
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btncart}
          onPress={() => handleAddToCart()}
        >
          <Text style={styles.btnText}> ADD TO CARD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWith: 1,
    borderColor: "#FF0000",
    marginHorizontal: 8,
    marginVertical: 5,
    marginBottom: "45%",
    width: "45%",
    padding: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },

  cardImage: {
    height: 120,
    width: "100%",
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 10,
    fontWeight: 5,
    marginBottom: 5,
  },

  cardDesc: {
    fontSize: 10,
    textAlign: "left",
  },

  BtnContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  btn: {
    backgroundColor: "#000000",
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: "center",
  },

  btncart: {
    backgroundColor: "orange",
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: "center",
  },

  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ProductsCard;
