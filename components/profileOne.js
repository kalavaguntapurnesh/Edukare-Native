import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import otherOptions from "../data/otherOptions";
import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProfileTwoData from "../data/ProfileTwoData";

const profileOne = () => {
  const navigation = useNavigation();
  const other = ProfileTwoData;
  return (
    <View style={{ marginVertical: 20 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginVertical: 10,
          width: "60%",
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
          Your Learning Analysis
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {other.map((item, index) => (
          <Pressable
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: 8,
              paddingHorizontal: 2,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 14,
              marginHorizontal: 4,
            }}
          >
            <View
              style={{
                borderWidth: 1.0,
                borderColor: "#ffc020",
                borderRadius: 4,
                padding: 10,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 8,
                }}
              >
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    marginHorizontal: 12,
                    marginVertical: 4,
                  }}
                  source={{ uri: item?.image }}
                ></Image>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",

                }}
              >
                <Text style={{ fontWeight: "bold", fontSize:18 }}>{item.id}</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 8,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default profileOne;

const styles = StyleSheet.create({});
