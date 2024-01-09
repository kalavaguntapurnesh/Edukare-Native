import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SchoolScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginTop: 4, backgroundColor: "white", flex: 1 }}>
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

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            width: "full",
            fontWeight: "bold",
            color: "#1a2b6d",
            textAlign: "center",
          }}
        >
          Exclusive Content for Students
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
          <Pressable
            onPress={() => navigation.navigate("LKG")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2367/2367604.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>LKG</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("UKG")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/1685/1685441.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>UKG</Text>
            </View>
          </Pressable>
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
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("GradeOne")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5010/5010276.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 1</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("GradeTwo")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5229/5229407.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 2</Text>
            </View>
          </Pressable>
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
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("GradeThree")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/8640/8640015.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 3</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("GradeFour")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/4100/4100658.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 4</Text>
            </View>
          </Pressable>
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
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("GradeFive")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3977/3977940.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 5</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("GradeSix")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2851/2851063.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 6</Text>
            </View>
          </Pressable>
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
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("GradeSeven")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/7611/7611873.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 7</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("GradeEight")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/1036/1036301.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 8</Text>
            </View>
          </Pressable>
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
            paddingBottom: 12,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("GradeNine")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/263/263032.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 9</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("GradeTen")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3485/3485474.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 10</Text>
            </View>
          </Pressable>
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
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("GradeEleven")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2532/2532656.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 11</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("GradeTwelve")}
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
              marginHorizontal: 4,
            }}
          >
            <View style={{ width: "50%" }}>
              <Image
                style={{ width: 45, height: 45 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5332/5332951.png",
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
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Grade 12</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SchoolScreen;

const styles = StyleSheet.create({});
