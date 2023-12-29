import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CartScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={{ marginTop: 4, backgroundColor: "white", flex: 1 }}>
      <View style={{ marginTop: 60 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 10,
            color:"#1a2b6d"
          }}
        >
          Your wishlist <Text style={{color:"#e7473c"}}>now</Text> currently empty
        </Text>

        <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
          <MaterialCommunityIcons
            name="book-education-outline"
            size={120}
            color="#1a2b6d"
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginVertical: 10,
            fontWeight: "600",
          }}
        >
          Your items will come here.
        </Text>
      </View>
      <View style={{ marginTop: 50, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 17, fontWeight: "700" }}>
          Explore our other products once
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        {products?.map((item, index) => (
          <ProductItem item={item} key={index}></ProductItem>
        ))}
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
