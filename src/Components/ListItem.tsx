import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { JoeIcon } from "@/Assets/Icons";
import images from "@/Assets/Images/Index";

const ListItem = ({ name }: any) => {
  return (
    <View>
      {name === "Joe" && <Image source={images.joe} />}
      {name === "Sarah" && <Image source={images.sarah} />}
      {name === "Hanax" && <Image source={images.hanax} />}
      {name === "Liz" && <Image source={images.liz} />}
      {name === "Inioluwa" && <Image source={images.ini} />}

      <Text style={{ textAlign: "center" }}>{name}</Text>
      <Text style={{ color: "#2364aa", textAlign: "center" }}>₦5000</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
