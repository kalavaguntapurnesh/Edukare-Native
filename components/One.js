import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import lastData from "../data/lastData";
import { Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const One = () => {
  const navigation = useNavigation();

  const lastdata = lastData;
  return (
    <View style={{ marginVertical: 10 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          margin: 14,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            width: "50%",
            fontWeight: "bold",
            color: "black",
          }}
        >
          My Courses
        </Text>

        <View
          style={{
            width: "50%",
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <Ionicons name="grid" size={24} color="black" />
        </View>
      </View>
      {lastdata.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => navigation.navigate("School")}
          style={{
            //backgroundColor: "#F8F8F8",
            backgroundColor: "white",
            borderRadius: 8,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 14,
            elevation: 3,
          }}
        >
          <View>
            <Image
              style={{ width: 70, height: 70 }}
              source={{ uri: item?.image }}
            ></Image>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              {item.title}
            </Text>
          </View>
          <View>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default One;

const styles = StyleSheet.create({});
