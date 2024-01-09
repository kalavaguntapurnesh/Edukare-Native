import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import otherOptions from "../data/otherOptions";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CarouselDown = () => {
  const navigation = useNavigation();
  const other = otherOptions;
  return (
    <View style={{marginVertical:20}}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems:"center",
          justifyContent:"center",
          marginVertical:10
        }}
      >
        <Text
          style={{
            fontSize: 20,
            width: "50%",
            fontWeight: "bold",
            color: "#1a2b6d",
            textAlign:"center"
            
          }}
        >
         Try <Text style={{color:"#e7473c"}}>Other</Text> Options
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
            marginHorizontal:16,
            //elevation: 3,
          }}
        >
          <View>
            <Image
              style={{ width: 50, height: 50, marginHorizontal: 12 }}
              source={{ uri: item?.image }}
            ></Image>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
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

export default CarouselDown;

const styles = StyleSheet.create({});
