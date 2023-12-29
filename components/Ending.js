import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Ending = () => {
  return (
    <View style={{ backgroundColor: "#f8f9fa", }}>
      <View style={{ marginTop: 26, marginBottom: 10 }}>
        <Text style={{ fontSize: 32, fontWeight: "900", color: "#1a2b6d", textAlign:"center" }}>
          EDU<Text style={{ color: "#e7473c" }}>KARE.</Text>
        </Text>
      </View>

      <View style={{ marginTop: 10, marginBottom:20, flex:1, flexDirection:"row", justifyContent:"space-evenly" }}>
        <FontAwesome name="whatsapp" size={24} color="black" />
        <AntDesign name="twitter" size={24} color="black" />
        <Entypo name="pinterest" size={24} color="black" />
        <AntDesign name="youtube" size={24} color="black" />
      </View>
    </View>
  );
};

export default Ending;

const styles = StyleSheet.create({});
