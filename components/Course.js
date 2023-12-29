import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import courseData from "../data/courseData";

const Course = () => {
  const data = courseData;

  return (
    <View style={{ margin: 10 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginBottom: 7,
          textAlign: "center",
           color:"#1a2b6d"
        }}
      >
        Explore Our <Text style={{ color: "#e7473c" }}>Other</Text> Test Series
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 15 }}
      >
        {data.map((item, index) => (
          <Pressable key={index} style={{ margin: 10 }}>
            <ImageBackground
              source={{ uri: item.image }}
              style={{
                aspectRatio: 6 / 6,
                height: 160,
                elevation:0.5,
                shadowColor: "#171717",
                borderRadius: 10,
                borderWidth:0.2,
                borderColor:"black",
                overflow: "hidden",
              }}
              imageStyle={{ borderRadius: 6 }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "500" }}>
              {item.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({});
