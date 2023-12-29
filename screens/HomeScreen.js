import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={{ paddingTop: 50 }}>
      <Image
        style={{ height: 270, width: "100%", resizeMode: "contain" }}
        source={require("../assets/logo_copy.png")}
      />

      <View style={{ padding: 10 }}>
        <Text
          style={{
            paddingTop: 20,
            textAlign: "center",
            color: "#ffc020",
            fontSize: 28,
            fontWeight: "600",
          }}
        >
          Quiz Rules
        </Text>

        <View
          style={{
            padding:14,
            backgroundColor: "green",
            borderRadius: 6,
            marginTop: 40,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                marginLeft: 4,
                color: "black",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              For Each Correct answer you get 5 points.
            </Text>
          </View>

          <View style={{marginTop:10}}>
            <Text
              style={{
                marginLeft: 4,
                color: "black",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              There is no negative marking for wrong answers.
            </Text>
          </View>

          <View style={{marginTop:10}}>
            <Text
              style={{
                marginLeft: 4,
                color: "black",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Each question has a time limit of 15 seconds.
            </Text>
          </View>

          <View style={{marginTop:10}}>
            <Text
              style={{
                marginLeft: 4,
                color: "black",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              You should answer all the questions.
            </Text>
          </View>
        </View>
      </View>

      <Pressable onPress={() => navigation.navigate("Quiz")} 
      style={{backgroundColor:"#ffc020", padding:18, borderRadius:8, marginLeft:"auto", marginRight:"auto", marginTop:70}}>
            <Text style={{fontSize:17,color:"white", textAlign:"center", fontWeight:"600"}}>Start Quiz</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
