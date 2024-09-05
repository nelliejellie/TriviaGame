import {
  View,
  Text,
  ImageBackground,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./Styles";
import images from "@/Assets/Images/Index";
import { ThumbnailIcon, CleanerIcon, PlusIcon, WaveIcon } from "@/Assets/Icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import QuestionIcon from "@/Assets/Icons/QuestionIcon";
import ListItem from "@/Components/ListItem";

const Home = () => {
  const DATA = [
    { id: "1", name: "Joe" },
    { id: "2", name: "Sarah" },
    { id: "3", name: "Hanax" },
    { id: "4", name: "Inioluwa" },
    { id: "5", name: "Liz" },
  ];
  const { navigate } = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={images.backGround} style={styles.topBackground}>
        <View style={styles.firstLayer}>
          <Image source={images.thumbnail} />
          <View style={styles.rightSide}>
            <View style={styles.cleanerContainer}>
              <CleanerIcon />
              <Text style={{ color: "white" }}>0</Text>
            </View>
            <View style={styles.whitemoney}>
              <Text style={{ color: "#17478b", marginHorizontal: 2 }}>
                ₦5000
              </Text>
              <AntDesign name="pluscircleo" size={20} color="#17478b" />
            </View>
            <FontAwesome name="bell-o" size={24} color="white" />
          </View>
        </View>
        <View>
          <View style={styles.wave}>
            <Text style={styles.HeaderText}>Hello John</Text>
            <WaveIcon />
          </View>

          <Text
            style={{
              color: "#fff",
              marginLeft: 10,
              fontSize: 18,
              marginTop: 10,
            }}
          >
            Let's Play and Earn
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.cardContainer}>
        <View style={styles.questionContainer}>
          <QuestionIcon />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textOne}>Game Prize</Text>
          <Text style={styles.textTwo}>1,000,000</Text>
          <Text style={styles.textThree}>Next game: Tomorrow, 8PM</Text>
        </View>
        <View style={styles.blueBottom}>
          <TouchableOpacity
            onPress={() => {
              navigate("Game");
            }}
          >
            <Text style={styles.joinGame}>Join Game</Text>
          </TouchableOpacity>

          <Text style={{ color: "white" }}>Entry Fee ₦100</Text>
        </View>
      </View>
      <View style={styles.gamersContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 20 }}>
          Top Gamers of the Day
        </Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <ListItem name={item.name} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "space-around",
            width: "100%",
            marginTop: 10,
          }}
        />
      </View>
      <View style={styles.lastContainer}>
        <View style={styles.referContainer}>
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}>
            Refer & Earn with your friends
          </Text>
          <Text style={{ color: "#fff", fontSize: 11, marginTop: 10 }}>
            share with your friends and loved ones to come and play
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#fff",
              width: 100,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                padding: 5,
              }}
            >
              Invite Friends
            </Text>
          </View>
        </View>
        <Image source={images.share} />
      </View>
    </ScrollView>
  );
};

export default Home;
