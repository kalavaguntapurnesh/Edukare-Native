import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
const ResultsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  let finalResult = 0;

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      //Alert.alert("Exam is done. Please go forward");
    });
  });

  // console.log(route.params);
  return (
    <View style={{ backgroundColor: "#f8f9fa", flex: 1, height: "100%" }}>
      <View style={{ marginTop: 50 }}>
        <View style={{ marginVertical: 20 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
              color: "#1a2b6d",
            }}
          >
            Congratulations!!
          </Text>
        </View>
        {/* <View style={{flex:1, alignItems:"center", overflow:"hidden"}}>
          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 30,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://img.freepik.com/premium-vector/trophy-isolated-white-background-vector-illustration_454461-5600.jpg?w=2000",
            }}
          />
        </View>*/}
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontWeight: "800",
            textAlign: "center",
            marginTop: 4,
          }}
        >
          Your Score Card
        </Text>
      </View>

      {/*<FlatList
        style={{ height: "500" }}
        data={route.params.answers}
        renderItem={({ item, i }) => (
          <View>
            {item.answer === true ? (
              <View>
                <Text style={{ fontSize: 20, textAlign: "center" }}>
                  {(finalResult = finalResult + 10)}
                </Text>
              </View>
            ) : (
              
            )}
          </View>
        )}
      >
        <View style={{ borderWidth: 2, borderColor: "red", width: "100%" }}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            {finalResult}
          </Text>
        </View>
            </FlatList>*/}

      <View
        style={{
          marginVertical: 24,
          height: "auto",
        }}
      >
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="checkcircle"
                  size={20}
                  color="green"
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="closecircle"
                  size={20}
                  color="red"
                />
              )}
            </View>
          )}
        />
      </View>

      <View style={{ marginTop: 36, marginBottom: 8 }}>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
          >
            How much would you rate this test?
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{ marginTop: 20 }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginVertical: 12,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/187/187159.png",
                  }}
                  style={{ width: 50, height: 50 }}
                ></Image>
              </View>
              <View style={{ marginVertical: 4 }}>
                <Text style={{ fontWeight: "bold", color: "#1a2b6d" }}>
                  Excellent
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/187/187162.png",
                  }}
                  style={{ width: 50, height: 50 }}
                ></Image>
              </View>
              <View style={{ marginVertical: 4 }}>
                <Text style={{ fontWeight: "bold", color: "#1a2b6d" }}>
                  Average
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/5569/5569897.png",
                  }}
                  style={{ width: 50, height: 50 }}
                ></Image>
              </View>
              <View style={{ marginVertical: 4 }}>
                <Text style={{ fontWeight: "bold", color: "#1a2b6d" }}>
                  Poor
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>

      <View style={{ paddingVertical: 24, marginVertical: 20 }}>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "#1a2b6d",
            padding: 16,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
            borderRadius: 4,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Back to Home
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});
