import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import TrendingData from "../data/TrendingData";

const StartTest = () => {
  const trendingData = TrendingData;
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
          Start Writing <Text style={{color:"#e7473c"}}>exams</Text> subject wise.
        </Text>

        <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
          <FontAwesome5 name="school" size={120} color="#1a2b6d" />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            marginVertical: 14,
            fontWeight: "600",
          }}
        >
          Browse your favourite subject here.
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
              style={{ width: 200, height: 200, resizeMode: "contain" }}
              source={{ uri: item?.image }}
            ></Image>
            <Text>TRENDING</Text>
          </View>
        </Pressable>
      ))}
    </View>
    </ScrollView>
  );
};

export default StartTest;

const styles = StyleSheet.create({});
