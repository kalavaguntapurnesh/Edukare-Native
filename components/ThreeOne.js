import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import ThirdData from "../data/ThirdData";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ThreeOne = () => {
  const navigation = useNavigation();
  const dataFor = ThirdData;
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dataFor.map((item, index) => (
          <Pressable
            onPress={() => navigation.navigate("AllSubject")}
            key={index}
            style={{
              marginTop: 8,
              backgroundColor: "white",
              paddingVertical: 16,
              paddingHorizontal: 4,
              marginHorizontal: 6,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.5,
                borderColor: "#191a18",
                overflow: "hidden",
                paddingVertical: 16,
                paddingHorizontal: 16,
                borderRadius: 4,
              }}
            >
              <View>
                <Image
                  style={{ width: 50, height: 52 }}
                  source={{ uri: item.image }}
                ></Image>
              </View>
              <View style={{ marginHorizontal: 6 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {item.title}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default ThreeOne;

const styles = StyleSheet.create({});
