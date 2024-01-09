import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import otherOptions from "../data/otherOptions";
import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProfileOptions from "../data/ProfileOptions";

const profileTwo = () => {
  const navigation = useNavigation();
  const other = ProfileOptions;
  return (
    <View style={{ marginVertical: 20 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginVertical: 10,
          width: "50%",
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
          Try <Text style={{ color: "#e7473c" }}>Other</Text> Options
        </Text>
      </View>

      {other.map((item, index) => (
        <Pressable
          key={index}
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 14,
            marginHorizontal: 16,
            /*borderWidth: 2,
            borderColor: "black",*/

            //elevation: 3,
          }}
        >
          <View
            style={{
              /*borderWidth: 2,
              borderColor: "green",*/
              width: "60%",
              flexDirection: "row",
            }}
          >
            <View
              style={{ /*borderWidth: 2, borderColor: "brown",*/ width: "35%", alignItems:"center", justifyContent:"center" }}
            >
              <Image
                style={{ width: 50, height: 50, marginHorizontal: 12 }}
                source={{ uri: item?.image }}
              ></Image>
            </View>
            <View
              style={{
                /*borderWidth: 2,
                borderColor: "blue",*/
                alignItems:"flex-start",
                justifyContent: "center",
                width: "65%",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {item.title}
              </Text>
            </View>
          </View>
          <View style={{ /*borderWidth: 2, borderColor: "red",*/ width: "40%" }}>
            <View
              style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
            >
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default profileTwo;

const styles = StyleSheet.create({});
