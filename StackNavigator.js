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
import SchoolScreen from "./screens/SchoolScreen";
import LKGScreen from "./screens/LKGScreen";
import UKGScreen from "./screens/UKGScreen";
import GradeOneScreen from "./screens/GradeOneScreen";
import GradeTwoScreen from "./screens/GradeTwoScreen";
import GradeThreeScreen from "./screens/GradeThreeScreen";
import GradeFourScreen from "./screens/GradeFourScreen";
import GradeFiveScreen from "./screens/GradeFiveScreen";
import GradeSixScreen from "./screens/GradeSixScreen";
import GradeSevenScreen from "./screens/GradeSevenScreen";
import GradeEightScreen from "./screens/GradeEightScreen";
import GradeNineScreen from "./screens/GradeNineScreen";
import GradeTenScreen from "./screens/GradeTenScreen";
import GradeElevenScreen from "./screens/GradeElevenScreen";
import GradeTwelveScreen from "./screens/GradeTwelveScreen";
import AllSubjectsScreen from "./screens/AllSubjectsScreen";
import CourseTypeScreen from "./screens/CourseTypeScreen";
import ParagraphScreen from "./screens/ParagraphScreen";

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
            tabBarLabelStyle: {
              color: "#1a2b6d",
              fontWeight: "bold",
              fontSize: 12,
            },

            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="home-outline" size={24} color="#e7473c" />
              ) : (
                <Ionicons name="home-outline" size={24} color="#1a2b6d" />
              ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            tabBarLabelStyle: {
              color: "#1a2b6d",
              fontWeight: "bold",
              fontSize: 12,
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="search1" size={24} color="#e7473c" />
              ) : (
                <AntDesign name="search1" size={24} color="#1a2b6d" />
              ),
          }}
        />

        <Tab.Screen
          name="My Tests"
          component={StartTest}
          options={{
            tabBarLabel: "My Tests",
            tabBarLabelStyle: {
              color: "#1a2b6d",
              fontWeight: "bold",
              fontSize: 12,
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="book" size={24} color="#e7473c" />
              ) : (
                <AntDesign name="book" size={24} color="#1a2b6d" />
              ),
          }}
        />

        <Tab.Screen
          name="Wishlist"
          component={CartScreen}
          options={{
            tabBarLabel: "Wishlist",
            tabBarLabelStyle: {
              color: "#1a2b6d",
              fontWeight: "bold",
              fontSize: 12,
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="hearto" size={24} color="#e7473c" />
              ) : (
                <AntDesign name="hearto" size={24} color="#1a2b6d" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Account",
            tabBarLabelStyle: {
              color: "#1a2b6d",
              fontWeight: "bold",
              fontSize: 12,
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="user-o" size={24} color="#e7473c" />
              ) : (
                <FontAwesome name="user-o" size={24} color="#1a2b6d" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {/*<Stack.Screen
        name="Splash"
        component={SplashScreen}
        ></Stack.Screen>*/}
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
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
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
          name="CourseScreen"
          component={CourseInfoScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="School"
          component={SchoolScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LKG"
          component={LKGScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UKG"
          component={UKGScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="GradeOne"
          component={GradeOneScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="GradeTwo"
          component={GradeTwoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeThree"
          component={GradeThreeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeFour"
          component={GradeFourScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeFive"
          component={GradeFiveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeSix"
          component={GradeSixScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeSeven"
          component={GradeSevenScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeEight"
          component={GradeEightScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeNine"
          component={GradeNineScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeTen"
          component={GradeTenScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeEleven"
          component={GradeElevenScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeTwelve"
          component={GradeTwelveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllSubject"
          component={AllSubjectsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CourseType"
          component={CourseTypeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Paragraph"
          component={ParagraphScreen}
          options={{ headerShown: false }}
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
