import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import OfferData from "../data/OfferData";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Offers = () => {
  const offerData = OfferData;
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ marginVertical: 24 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            textAlign: "center",
            color: "#1a2b6d",
          }}
        >
          Today's <Text style={{ color: "#e7473c" }}>Trending</Text> Test Series
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 40}}
      >
        {offerData.map((item, index) => (
          <Pressable
            key={index}
            onPress={() =>
              navigation.navigate("CourseScreen", {
                id: item.id,
                title: item.title,
                price: item?.price,
                carouselImages: item.carouselImages,
                color: item?.color,
                size: item?.size,
                oldPrice: item?.oldPrice,
                item: item,
              })
            }
            style={{
              marginVertical: 10,
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <Image
              style={{ width: 220, height: 190, resizeMode: "contain" }}
              source={{ uri: item?.image }}
            ></Image>

            <View style={{ marginVertical: 10 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "#1a2b6d" }}
              >
                {item.title}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#1a2b6d",
                paddingVertical: 7,
                width: 130,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 13,
                  fontWeight: "bold",
                }}
              >
                Know More
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({});
