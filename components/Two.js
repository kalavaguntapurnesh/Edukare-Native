import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Penultimate from "../data/Penultimate";

const Two = () => {
  const navigation = useNavigation();
  const penultimateDate = Penultimate;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {penultimateDate.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 4,
              paddingVertical: 10,
              paddingHorizontal: 16,
              elevation: 2,
              borderWidth: 0.3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "black",
            }}
          >
            <Image
              style={{ width: 70, height: 40 }}
              source={{ uri: item?.image }}
            ></Image>
            <View>
              <Text>UPSC CSE</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 4,
              padding: 10,
              elevation: 2,
              borderWidth: 0.3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "black",
            }}
          >
            <Image
              style={{ width: 70, height: 40 }}
              source={{ uri: item?.image }}
            ></Image>
            <Text>UPSC CSE</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Two;

const styles = StyleSheet.create({});
