import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import RecommendationData from "../data/RecommendationData";

const Recommendations = () => {
  const trendingData = RecommendationData;
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginVertical: 10,
          width: "60%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#1a2b6d",
            //textAlign:"center",
          }}
        >
          Our Recommendations
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
      >
        {trendingData.map((item, index) => (
          <Pressable
            key={index}
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
                style={{ width: 200, height: 120, resizeMode: "contain" }}
                source={{ uri: item?.image }}
              ></Image>
              <View
                style={{
                  marginVertical: 12,
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#1a2b6d", fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({});
