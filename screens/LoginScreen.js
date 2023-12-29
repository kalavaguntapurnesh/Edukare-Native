import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center", marginTop:40 }}
    >
      <View style={{  marginTop: 80 }}>
        {/*<Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "//hello",
          }}
        ></Image>*/}
        <Text style={{fontWeight:"bold", fontSize:28, color:"#1a2b6d"}}>EDU<Text style={{color:"#e7473c"}}>KARE.</Text></Text>
      </View>

      <KeyboardAvoidingView style={{marginTop:20}}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
              color: "#041E42",
            }}
          >
            Login to your Account
          </Text>
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
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 12, color: "gray" }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your e-mail"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 18 : 16,
              }}
            ></TextInput>
          </View>
        </View>

        <View style={{ marginTop: 2 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Entypo
              name="lock"
              size={24}
              color="gray"
              style={{ marginLeft: 12, color: "gray" }}
            />
            <TextInput
              value={password}
              onChange={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter your Password"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
            ></TextInput>
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep Me Logged In</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password?
          </Text>
        </View>

        <View style={{ marginTop: 80 }}>
          <Pressable onPress={() => navigation.navigate("Main")}
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
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Log In
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 15 }}>
              Don't have an account? <Text style={{color:"black", fontWeight:"bold"}}>Sign Up</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});



/*https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png*/ 