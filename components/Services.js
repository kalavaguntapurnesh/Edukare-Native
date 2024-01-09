import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AllSubjectsScreen from "../screens/AllSubjectsScreen";

const Services = () => {
  const navigation = useNavigation();
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/512/1467/1467187.png",
      name: "Physics",
    },
    {
      id: "1",
      image: "https://cdn-icons-png.flaticon.com/512/1156/1156950.png",
      name: "Chemistry",
    },

    {
      id: "2",
      image: "https://cdn-icons-png.flaticon.com/512/2784/2784428.png",
      name: "Biology",
    },
    {
      id: "3",
      image: "https://cdn-icons-png.flaticon.com/512/5090/5090712.png",
      name: "Maths",
    },
    {
      id: "4",
      image: "https://cdn-icons-png.flaticon.com/256/5632/5632466.png",
      name: "English",
    },
    {
      id: "5",
      image: "https://cdn-icons-png.flaticon.com/256/3403/3403563.png",
      name: "Social",
    },
  ];

  return (
    <View style={{ padding: 10, marginTop: 26 }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "700",
          marginBottom: 7,
          textAlign: "center",
          color: "#1a2b6d",
        }}
      >
        Subject <Text style={{ color: "#e7473c" }}>Tests </Text>we offer
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable
            onPress={() => navigation.navigate("AllSubject")}
            key={index}
            style={{
              margin: 11,
              backgroundColor: "white",
              padding: 20,
              borderRadius: 8,
            }}
          >
            <Image
              source={{ uri: service.image }}
              style={{ width: 70, height: 70 }}
            />
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontWeight: "600",
                fontSize: 17,
                fontWeight: "bold",
                color: "#1a2b6d",
              }}
            >
              {service.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
