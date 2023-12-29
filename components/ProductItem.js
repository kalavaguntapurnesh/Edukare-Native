import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";

import lastData from "../data/lastData";
import { useNavigation } from "@react-navigation/native";

const ProductItem = () => {
  const lastdata = lastData;
  const navigation = useNavigation();

  /* const [products, setProducts] = useState([]);
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
  }, []);*/

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
    >
      {lastdata.map((item, index) => (
        <Pressable
          key={index}
          
          style={{
            marginHorizontal: 25,
            marginVertical: 25,
          }}
        >
          <Image
            style={{ width: 150, height: 150, resizeMode: "contain" }}
            source={{ uri: item?.image }}
          />
          <View style={{ marginVertical: 6 }}>
            <Text
              numberOfLines={1}
              style={{
                width: 150,
                marginTop: 10,
                textAlign: "center",
                fontWeight: "bold",
                color:"#1a2b6d",
                fontSize:16
              }}
            >
              {" "}
              {item?.title}
            </Text>
          </View>

          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
           {/* <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item?.id}</Text>*/}
            <Text style={{ color: "#e7473c", fontWeight: "bold", fontSize:14 }}>
              {item?.rating} Rating
            </Text>
          </View>
          <Pressable
            style={{
              backgroundColor: "#1a2b6d",
              padding: 10,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
              marginTop: 16,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
              Take Test
            </Text>
          </Pressable>
        </Pressable>
      ))}
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
