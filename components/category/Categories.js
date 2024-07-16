import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();

  let CategoriesData = [
    {
      _id: 1,
      name: "Mobile",
      path: "mobile",
      icon: "mobile1",
    },
    {
      _id: 2,
      name: "Laptop",
      path: "laptop",
      icon: "laptop",
    },

    {
      _id: 3,
      name: "Desktop",
      path: "desktop",
      icon: "iconfontdesktop",
    },
    {
      _id: 4,
      name: "Tablet",
      path: "tablet",
      icon: "tablet1",
    },
    {
      _id: 5,
      name: "Headfones",
      path: "headphones",
      icon: "customerservice",
    },
    {
      _id: 6,
      name: "Accessories",
      path: "Accessories",
      icon: "windowso",
    },
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {CategoriesData?.map((item) => {
          return (
            <View key={item._id}>
              <TouchableOpacity
                style={styles.catContainer}
                onPress={() => navigation.navigate(item.path)}
              >
                <AntDesign name={item.icon} style={styles.catIcon} />
                <Text style={styles.catTitle}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 5,
    flexDirection: "row",
  },

  catContainer: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  catIcon: {
    fontSize: 30,
    verticalAlign: "top",
  },
  catTitle: {
    fontSize: 12,
  },
});

export default Categories;
