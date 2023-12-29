import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import TrendingData from "../data/TrendingData";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Trending = () => {
  const trendingData = TrendingData;
  const navigation = useNavigation();

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
    >
      {trendingData.map((item, index) => (
        <Pressable
          key={index}
          onPress={() =>
            navigation.navigate("CourseScreen", {
              id: item.id,
              title: item.title,
              price: item?.price,
              carouselImages: item.carouselImages,
              color: item?.color,
              size: item?.size,
              oldPrice: item?.oldPrice,
              item: item,
            })
          }
          style={{
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Image
              style={{ width: 200, height: 200, resizeMode: "contain" }}
              source={{ uri: item?.image }}
            ></Image>
            <Text style={{fontWeight:"bold", marginVertical:10, fontSize:17, color:"#1a2b6d" }}>{item.title}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({});
