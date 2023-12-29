import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
//import EducationTypes from "../components/EducationTypes";
import Course from "../components/Course";
import Services from "../components/Services";
import Ending from "../components/Ending";
import Trending from "../components/Trending";
import Offers from "../components/Offers";
import axios from "axios";
import ProductItem from "../components/ProductItem";
//import * as Location from "expo-location";

const DashBoardScreen = () => {
  const navigation = useNavigation();

  /* const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, []);*/

  //console.log("Products", products);

  {
    /*const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "We are loading the location"
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);


  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please Enable the Location",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ],
        { cancdlable: false }
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Allow the Application to use Location",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ],
        { cancdlable: false }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    console.log(coords);
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      console.log(response);

      for(let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };*/
  }

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

      {/*Image slider should be kept here...*/}
      <Carousel />
      <Services />
      {/*Brief Description of the images*/}
      <Course />

      <View style={{ marginVertical: 20 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            textAlign: "center",
            color: "#1a2b6d",
          }}
        >
          Recommended <Text style={{ color: "#e7473c" }}>Courses</Text> For You
        </Text>
      </View>

      <Trending />

      <Text
        style={{
          height: 0.5,
          borderColor: "#D0D0D0",
          borderWidth: 2,
          marginTop: 15,
        }}
      ></Text>

      <View style={{ marginVertical: 40 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            textAlign: "center",
            color: "#1a2b6d",
          }}
        >
          Today's <Text style={{ color: "#e7473c" }}>Test</Text> Series
        </Text>
      </View>

      <Offers />

      <Text
        style={{
          height: 1,
          borderColor: "#D0D0D0",
          borderWidth: 2,
          marginTop: 15,
        }}
      ></Text>

      <View style={{ marginBottom: 30, marginTop:40 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            textAlign: "center",
            color: "#1a2b6d",
          }}
        >
          Trending <Text style={{ color: "#e7473c" }}>Test</Text> Series
        </Text>
      </View>

      <ProductItem />

      <Ending />
    </ScrollView>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({});
