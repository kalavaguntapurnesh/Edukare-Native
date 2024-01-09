import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import GradeTwelveData from "../data/GradeTwelveData";
import { useNavigation } from "@react-navigation/native";

const GradeTwelveScreen = () => {
  const navigation = useNavigation();
  const lastdata = GradeTwelveData;
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

      <ScrollView>
        <View style={{ marginVertical: 10 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              margin: 14,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                width: "50%",
                fontWeight: "bold",
                color: "black",
              }}
            >
              My Courses
            </Text>

            <View
              style={{
                width: "50%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Ionicons name="grid" size={24} color="black" />
            </View>
          </View>
          {lastdata.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate("CourseType")}
              style={{
                //backgroundColor: "#F8F8F8",
                backgroundColor: "white",
                borderRadius: 8,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 14,
                elevation: 3,
              }}
            >
              <View>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={{ uri: item?.image }}
                ></Image>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {item.title}
                </Text>
              </View>
              <View>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default GradeTwelveScreen;

const styles = StyleSheet.create({});
