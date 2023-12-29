import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";

const Services = () => {
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/512/7614/7614875.png",
      name: "Physics",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/512/8716/8716846.png",
      name: "Chemistry",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/512/2084/2084541.png",
      name: "Mathematics",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/512/2201/2201544.png",
      name: "Biology",
    },
    
  ];

  return (
    <View style={{ padding: 10, marginTop:26}}>
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 7, textAlign:"center", color:"#1a2b6d" }}>
         Test <Text style={{color:"#e7473c"}}>Series </Text>we offer
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable
            key={index}
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 20,
              borderRadius: 8,
            }}
          >
            <Image
              source={{ uri: service.image }}
              style={{ width: 70, height: 70 }}
            />
            <Text style={{ textAlign: "center", marginTop: 10, fontWeight:"600", fontSize:17, fontWeight:"bold", color:"#1a2b6d" }}>
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
