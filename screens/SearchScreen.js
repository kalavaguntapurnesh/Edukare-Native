import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native";
import Offers from "../components/Offers";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginTop: 4, backgroundColor: "white", flex: 1 }}>
      {/*Search Bar*/}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          //borderColor: "#C0C0C0",
          borderColor: "#1a2b6d",
          borderRadius: 4,
          marginRight: 10,
          marginLeft: 10,
          marginBottom: 10,
          marginTop: 50,
          padding: 10,
          borderWidth: 1.3,
          //borderColor:"blue"
        }}
      >
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search for a course or an exam"
        ></TextInput>
        <AntDesign name="search1" size={24} color="#e7473c" />
      </View>

      <View style={{ marginVertical: 15 }}>
        <Text style={{ fontWeight: "800", fontSize: 17, color:"#1a2b6d", textAlign:"center" }}>
          Browse Categories
        </Text>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              Mathematics
            </Text>

            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              Social Science
            </Text>
            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              General Science
            </Text>
            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              Economics
            </Text>
            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              Languages
            </Text>
            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              Human Anatomy
            </Text>
            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              English Literature
            </Text>
            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              History
            </Text>
            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              Art & Culture
            </Text>
            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              Political Science
            </Text>
            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Quiz")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                width: "50%",
                fontWeight: "500",
                color: "#7f7f7f",
              }}
            >
              Geographical Science
            </Text>
            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="right" size={18} color="#7f7f7f" />
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
