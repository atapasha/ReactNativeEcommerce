import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ route }) => {
  const [pDetails, setPDetails] = useState({});

  //get product details
  const GetProductDetails = () => {
    useEffect(() => {
      //find product details

      const getProduct = ProductData.find((p) => {
        return p._id === params._id;
      });

      setPDetails(getProduct);
    }, []);
  };

  console.log(route);

  const { params } = route;

  return (
    <View>
      <Text>ProductDetails{params._id}</Text>
      <Text>ProductDetails{JSON.stringify(pDetails, null, 4)}</Text>
    </View>
  );
};

export default ProductDetails;
