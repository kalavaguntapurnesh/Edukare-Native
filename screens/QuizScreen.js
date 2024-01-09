import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const QuizScreen = () => {
  const navigation = useNavigation();
  const data = questions;
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
  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Counter
  const [counter, setCounter] = useState(15);

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
      Alert.alert("Please complete the test!!!")
    })
  })

  return (
    <SafeAreaView
      style={{ paddingTop: 28, backgroundColor: "#f8f9fa", height: "100%" }}
    >
      <View style={{ marginTop: 20, marginBottom: 4 }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 26,
            color: "#1a2b6d",
          }}
        >
          QUIZ TEST
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 19, fontWeight: "600" }}>Test Challenge</Text>
        <Pressable
          style={{ padding: 12, backgroundColor: "#1a2b6d", borderRadius: 4 }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            {counter}
          </Text>
        </Pressable>
      </View>

      <View
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
      </View>

      {/* Progress Bar */}
      <View
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
      </View>

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

        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              key={index}
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index &&
                index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      //borderWidth: 0.5,
                      //borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "green",
                      borderRadius: 6,
                      height: 50,
                      elevation: 3,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      //borderWidth: 0.5,
                      //borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "red",
                      borderRadius: 6,
                      height: 50,
                      elevation: 3,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 9,
                      borderRadius: 6,
                      height: 50,
                      elevation: 3,
                      backgroundColor: "#fff",
                    }
              }
            >
              {selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex ? (
                <AntDesign
                  style={{
                    borderColor: "#1a2b6d",
                    textAlign: "center",
                    borderWidth: 0,
                    width: 40,
                    height: 40,
                    borderRadius: 4,
                    padding: 10,
                  }}
                  name="checkcircle"
                  size={20}
                  color="white"
                />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={{
                    borderColor: "#1a2b6d",
                    textAlign: "center",
                    borderWidth: 0,
                    width: 40,
                    height: 40,
                    padding: 10,
                    borderRadius: 4,
                  }}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                  style={{
                    // borderColor: "#1a2b6d",
                    textAlign: "center",
                    //borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    //borderRadius: 4,
                    padding: 10,
                    //borderColor:"red",
                    fontWeight: "700",
                    fontSize: 16,
                    borderRadius: 4,
                    backgroundColor: "#1a2b6d",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 4,
                    color: "white",
                  }}
                >
                  {item.options}
                </Text>
              )}

              <Text
                style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}
              >
                {item.answer}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,

                padding: 10,
                borderRadius: 6,
                height: 120,
              }
        }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" }
            }
          >
            {!!answerStatus ? (
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Correct Answer
                </Text>
              </View>
            ) : (
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Wrong Answer
                </Text>
              </View>
            )}
          </Text>
        )}

        {index + 1 >= questions.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Results", {
                points: points,
                answers: answers,
              })
            }
            style={{
              backgroundColor: "#1a2b6d",
              padding: 16,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 4,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: "#1a2b6d",
              padding: 20,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Next Question
            </Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({});
