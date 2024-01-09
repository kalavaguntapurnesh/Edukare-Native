import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  Dimensions,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import paraData from "../data/paraData";
import { Entypo } from "@expo/vector-icons";

const ParagraphScreen = () => {
  const navigation = useNavigation();
  const data = paraData;
  const totalQuestions = data.length;
  const { height, width } = Dimensions.get("window");
  // points
  const [points, setPoints] = useState(0);
  // index of the question
  const [index, setIndex] = useState(0);
  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);
  // answers
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState("");
  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Counter
  const [counter, setCounter] = useState(1200);

  // interval
  let interval = null;

  // progress bar
  const progressPercentage = Math.floor((index / totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    // clean up
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval);
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];
  console.log(answerStatus);

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      Alert.alert("Please complete the test!!!");
    });
  });

  return (
    <SafeAreaView
      style={{ paddingTop: 28, backgroundColor: "#f8f9fa", height: "100%" }}
    >
      <View style={{ marginTop: 40, marginBottom: 4 }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 26,
            color: "#1a2b6d",
          }}
        >
          Descriptive Examination
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          marginTop: 8,
        }}
      >
        <Text style={{ fontSize: 19, fontWeight: "600" }}>Test Challenge</Text>
        <Pressable
          style={{ padding: 12, backgroundColor: "#1a2b6d", borderRadius: 4 }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {counter}
          </Text>
        </Pressable>
      </View>

      {/*<View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 15 }}>Your Progress</Text>
        <Text style={{ fontSize: 15 }}>
          ({index}/{totalQuestions}) questions answered
        </Text>
    </View>*/}

      {/* Progress Bar */}
      {/*<View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          height: 10,
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 20,
          marginHorizontal: 1,
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            backgroundColor: "#1a2b6d",
            borderRadius: 12,
            position: "absolute",
            left: 0,
            height: 10,
            right: 0,
            width: `${progressPercentage}%`,
            marginTop: 20,
          }}
        />
        </View>*/}

      <View
        style={{
          marginTop: 30,
          // backgroundColor: "#f8f9fa",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            paddingHorizontal: 8,
            lineHeight: 28,
          }}
        >
          {currentQuestion?.question}
        </Text>
      </View>

      <View style={{ marginTop: 8, marginHorizontal: 8 }}>
        <TextInput
          placeholder="Start writing here..."
          style={{
            minHeight: 400,
            color: "black",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            borderWidth: 4,
            borderColor: "#d0d0d0",
            width: "100%",
            borderRadius: 5,
            fontSize: 16,
            textAlignVertical: "top",
            padding: 10,
          }}
          multiline
        ></TextInput>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Pressable
          //onPress={() => navigation.navigate("Main")}
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
            Submit Test
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ParagraphScreen;

const styles = StyleSheet.create({});
