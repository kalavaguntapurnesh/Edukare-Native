import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://img.freepik.com/free-photo/international-day-education-celebration_23-2150931160.jpg?t=st=1703065993~exp=1703069593~hmac=e989c8fb78429999a9bc6a57fa6bd14b683f3cf55fb74a5e566cca378689f8da&w=2000",
    "https://img.freepik.com/free-photo/view-bookbag-school-classroom_23-2150911487.jpg?t=st=1703066136~exp=1703069736~hmac=1e7a9b5993ef7fa588a85c2251bc407ca0d8829688e476f690487247533d661c&w=2000",
    "https://img.freepik.com/free-photo/empty-classroom-due-coronavirus-pandemic_637285-8845.jpg?w=2000&t=st=1703661021~exp=1703661621~hmac=8c12b2f4350292c149722b6a31f7d557332073b0de5ccad702d72c29bfbdddc7",
    "https://img.freepik.com/free-photo/multiethnic-pupils-doing-task-with-help-teacher_74855-10288.jpg?w=2000&t=st=1703661239~exp=1703661839~hmac=ec4e86a52df176102b30f7cb041e7a391d53c7a532c932a84a0dc1431799927b",
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoplay
        circleLoop
        autoplayInterval={2000}
        dotColor={"#e7473c"}
        inactiveDotColor={"#90A4AE"}
        ImageComponentStyle={{
          borderRadius: 4,
          width: "96%",
          
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
