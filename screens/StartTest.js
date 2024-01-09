import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import TrendingData from "../data/TrendingData";
import Recommendations from "../components/Recommendations";

const StartTest = () => {
  const navigation = useNavigation();
  const trendingData = TrendingData;
  return (
    <ScrollView style={{ marginTop: 4, backgroundColor: "white", flex: 1 }}>
      <View style={{ marginTop: 60 }}>
        {/*<Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 10,
            color: "#1a2b6d",
          }}
        >
          Tests you've <Text style={{ color: "#e7473c" }}>written</Text> recently
        </Text>*/}

        <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
          {/*<FontAwesome5 name="school" size={120} color="#1a2b6d" />*/}
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/4696/4696755.png",
            }}
          ></Image>
        </View>

        <View style={{ marginVertical: 12 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              color: "#1a2b6d",
              fontWeight: "bold",
              lineHeight: 28,
            }}
          >
            You haven't attempted any tests. Click below to see all the
            available tests.
          </Text>
        </View>
      </View>

      <View style={{ marginVertical:12 }}>
        <Pressable
          onPress={() => navigation.navigate("Main")}
          style={{
            width: 360,
            backgroundColor: "#1a2b6d",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Attempt a Test
          </Text>
        </Pressable>
      </View>

      <Recommendations />
    </ScrollView>
  );
};

export default StartTest;

const styles = StyleSheet.create({});
