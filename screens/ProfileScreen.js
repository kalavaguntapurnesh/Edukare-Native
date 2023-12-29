import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginTop: 8, backgroundColor: "white", flex: 1 }}>
      <View style={{ marginTop: 60 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color:"#1a2b6d" }}>
          My Profile
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 30,
            resizeMode: "contain",
            
          }}
          source={{
            uri: "https://cdn2.iconfinder.com/data/icons/essential-web-2/50/user-ciecle-round-account-person-512.png",
          }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color:"#1a2b6d" }}>
          Purnesh Kalavagunta
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather
            name="mail"
            size={26}
            color="black"
            style={{ marginHorizontal: 6 }}
          />
          <Text style={{ fontSize: 16, color: "#7f7f7f" }}>
            purnesh.kalavagunta@clouddatanetworks.com
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 10,
            marginHorizontal: 12,
          }}
        >
          <Ionicons
            name="person"
            size={24}
            color="black"
            style={{ marginLeft: 12, color: "gray" }}
          />
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Purnesh Kalavagunta"
            placeholderTextColor={"black"}
            style={{
              color: "gray",
              marginVertical: 10,
              width: 300,
              fontSize: name ? 18 : 16,
              marginHorizontal: 8,
            }}
          ></TextInput>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 18,
            marginHorizontal: 12,
          }}
        >
          <MaterialIcons
            name="email"
            size={24}
            color="black"
            style={{ marginLeft: 12, color: "gray" }}
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="purnesh.kalavagunta@cdn.com"
            placeholderTextColor={"black"}
            style={{
              color: "gray",
              marginVertical: 10,
              width: 300,
              fontSize: name ? 18 : 16,
              marginHorizontal: 8,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 18,
            marginHorizontal: 12,
          }}
        >
          <MaterialIcons
            name="security"
            size={24}
            color="black"
            style={{ marginLeft: 12, color: "gray" }}
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="*************"
            placeholderTextColor={"black"}
            style={{
              color: "gray",
              marginVertical: 10,
              width: 300,
              fontSize: name ? 18 : 16,
              marginHorizontal: 8,
            }}
          ></TextInput>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 18,
            marginHorizontal: 12,
          }}
        >
          <FontAwesome
            name="address-book"
            size={24}
            color="black"
            style={{ marginLeft: 12, color: "gray" }}
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Tirupati, India"
            placeholderTextColor={"black"}
            style={{
              color: "gray",
              marginVertical: 10,
              width: 300,
              fontSize: name ? 18 : 16,
              marginHorizontal: 8,
            }}
          ></TextInput>
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <Pressable
          onPress={() => navigation.navigate("Main")}
          style={{
            width: 200,
            backgroundColor: "#1a2b6d",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Edit Profile
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
