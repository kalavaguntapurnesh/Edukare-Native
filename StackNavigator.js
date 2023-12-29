import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizScreen from "./screens/QuizScreen";
import ResultsScreen from "./screens/ResultsScreen";
import DashBoardScreen from "./screens/DashBoardScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import SearchScreen from "./screens/SearchScreen";
import StartTest from "./screens/StartTest";
import CartScreen from "./screens/CartScreen";
import CourseInfoScreen from "./screens/CourseInfoScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={DashBoardScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="home-outline" size={24} color="black" />
              ) : (
                <Ionicons name="home-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="search1" size={24} color="black" />
              ) : (
                <AntDesign name="search1" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="My Tests"
          component={StartTest}
          options={{
            tabBarLabel: "My Tests",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="book" size={24} color="black" />
              ) : (
                <AntDesign name="book" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Wishlist"
          component={CartScreen}
          options={{
            tabBarLabel: "Wishlist",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="hearto" size={24} color="black" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Account",
            tabBarLabelStyle: { color: "black" },
            headerShown:false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="user-o" size={24} color="black" />
              ) : (
                <FontAwesome name="user-o" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="DashBoard"
          component={DashBoardScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
         name = "CourseScreen"
         component={CourseInfoScreen}
         options={{headerShown:false}}
        />

        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        
      */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
