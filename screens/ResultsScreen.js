import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
const ResultsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // console.log(route.params);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
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

      <View style={{marginVertical:24}}>
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
              <Text>{item.question}</Text>
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

      <View style={{paddingVertical:24}}>
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
          <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
            DashBoard
          </Text>
        </Pressable>
      </View>
      
    </SafeAreaView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});
