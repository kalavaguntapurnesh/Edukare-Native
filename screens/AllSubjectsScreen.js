import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ServiceOne from "../components/ServiceOne";

const AllSubjectsScreen = () => {
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
        <Text
          style={{
            fontWeight: "800",
            fontSize: 17,
            color: "#1a2b6d",
            textAlign: "center",
          }}
        >
          Browse Categories
        </Text>
      </View>

      <ServiceOne />

    </ScrollView>
  );
};

export default AllSubjectsScreen;

const styles = StyleSheet.create({});
