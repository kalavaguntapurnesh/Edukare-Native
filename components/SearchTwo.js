import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const SearchTwo = () => {
  return (
    <View>
      <View style={{ marginTop:8, marginBottom:16}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            textAlign: "center",
            color: "#1a2b6d",
          }}
        >
          Our <Text style={{color:"#e7473c"}}>popular</Text> exams
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
         
        }}
      >
        <View
          //key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 4,
              paddingVertical: 16,
              paddingHorizontal: 28,
              elevation: 2,
              borderWidth: 0.3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "black",
              width: "45%",
              marginHorizontal:4
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/206/206606.png",
                }}
              ></Image>
            </View>
            <View
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>GATE</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 4,
              paddingVertical: 16,
              paddingHorizontal: 28,
              elevation: 2,
              borderWidth: 0.3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "black",
              width: "45%",
              marginHorizontal:4
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/630/630656.png",
                }}
              ></Image>
            </View>
            <View
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>GMAT</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{
          flex: 1,
          alignItems: "center",
        }}>
        <View
          //key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 4,
              paddingVertical: 16,
              paddingHorizontal: 28,
              elevation: 2,
              borderWidth: 0.3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "black",
              width: "45%",
              marginHorizontal:4
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/317/317350.png",
                }}
              ></Image>
            </View>
            <View
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>TOEFL</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 4,
              paddingVertical: 16,
              paddingHorizontal: 28,
              elevation: 2,
              borderWidth: 0.3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "black",
              width: "45%",
              marginHorizontal:4
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/1377/1377975.png",
                }}
              ></Image>
            </View>
            <View
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>GRE</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
         
        }}
      >
        <View
          //key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 10,
            paddingBottom:12
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 4,
              paddingVertical: 16,
              paddingHorizontal: 28,
              elevation: 2,
              borderWidth: 0.3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "black",
              width: "45%",
              marginHorizontal:4
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3013/3013915.png",
                }}
              ></Image>
            </View>
            <View
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>GMAT</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 4,
              paddingVertical: 16,
              paddingHorizontal: 28,
              elevation: 2,
              borderWidth: 0.3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "black",
              width: "45%",
              marginHorizontal:4
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/317/317569.png",
                }}
              ></Image>
            </View>
            <View
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>UPSC</Text>
            </View>
          </View>
        </View>
      </View>


    </View>
  );
};

export default SearchTwo;

const styles = StyleSheet.create({});
