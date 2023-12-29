import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const CourseInfoScreen = () => {
  const route = useRoute();
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  const navigation = useNavigation();
  const {title} = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginTop: 35, flex: 1, backgroundColor: "white" }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            key={index}
            source={{ uri: item }}
            style={{ width, height, marginTop: 25, resizeMode: "contain" }}
          ></ImageBackground>
        ))}
      </ScrollView>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 26, fontWeight: "bold", color:"#1a2b6d" }}>
          {title}
        </Text>
      </View>

      <View style={{ flex: 1, alignItems: "center", marginVertical: 10 }}>
        <Text
          style={{ textAlign: "center", fontSize: 18, marginHorizontal: 10 }}
        >
          Test Series on the fundamentals of {title} for the Grade of 11
          - 12
        </Text>
      </View>

      <View style={{ marginTop: 15, marginBottom: 10 }}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            marginBottom: 5,
          }}
        >
          <Feather
            name="check-square"
            size={24}
            color="black"
            style={{ marginHorizontal: 8 }}
          />
          <Text style={{ fontWeight: "600", fontSize: 16, color: "#7f7f7f" }}>
            There is no negative marking for wrong answers.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            marginBottom: 5,
          }}
        >
          <Feather
            name="check-square"
            size={24}
            color="black"
            style={{ marginHorizontal: 8 }}
          />
          <Text style={{ fontWeight: "600", fontSize: 16, color: "#7f7f7f" }}>
            Each question has a time limit of 15 seconds.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            marginBottom: 5,
          }}
        >
          <Feather
            name="check-square"
            size={24}
            color="black"
            style={{ marginHorizontal: 8 }}
          />
          <Text style={{ fontWeight: "600", fontSize: 16, color: "#7f7f7f" }}>
            For Each Correct answer you get 5 points.
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate("Quiz")}
        style={{
          backgroundColor: "#1a2b6d",
          padding: 10,
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17, color:"white" }}>Start Test</Text>
      </Pressable>
    </ScrollView>
  );
};

export default CourseInfoScreen;

const styles = StyleSheet.create({});
