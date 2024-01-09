import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate("Main")
    }, 4000);

  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Image
        style={{
          width: "100%",
          height: "90%",
          resizeMode: "contain",
        }}
        source={require("../assets/edukare.png")}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
