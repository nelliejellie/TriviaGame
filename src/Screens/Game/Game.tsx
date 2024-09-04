import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./Styles";
import images from "@/Assets/Images/Index";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Answer from "@/Components/Answer";
import { shuffleArray } from "@/Utils/Helpers";
import { UseGetQuestionsHook } from "@/Networking/hooks/useGetQuestionsHook";
import { useNavigation } from "@react-navigation/native";

const Game = () => {
  const [counter, setCounter] = useState<number>(10);
  const [correct, setCorrect] = useState<string>("not selected");
  const [correctOne, setCorrectOne] = useState<string>("not selected");
  const [correctTwo, setCorrectTwo] = useState<string>("not selected");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [correctThree, setCorrectThree] = useState<string>("not selected");
  const { getQuestionsHook } = UseGetQuestionsHook();
  const [questions, setQuestions] = useState([]);
  const [nextNumberQuestion, setnextNumberQuestion] = useState<number>(0);
  const [score, setScore] = useState(0);
  const { navigate } = useNavigation();

  const handleGetQuestions = async () => {
    try {
      const res = await getQuestionsHook();
      const mappedResults = res.results.map((item) => {
        const options = [item.correct_answer, ...item.incorrect_answers];
        return {
          question: decodeURIComponent(item.question),
          answer: decodeURIComponent(item.correct_answer),
          options: shuffleArray(
            options.map((option) => decodeURIComponent(option))
          ),
        };
      });
      setQuestions(mappedResults);
      console.log("questionddd", questions);
    } catch (error) {}
  };

  const handlePress = (val: string, setIt, answer: string) => {
    if (answer === val) {
      setIt("correct");
      setDisabled(true);
      setScore(score + 1);
    } else {
      setIt("wrong");
      setDisabled(true);
    }
  };

  useEffect(() => {
    handleGetQuestions();
  }, []);
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (counter > 0 && questions.length > 0) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    } else if (counter === 0) {
      if (nextNumberQuestion < 9) {
        setnextNumberQuestion(
          (prevIndex) => (prevIndex + 1) % questions.length
        );
        setCounter(10);
        setDisabled(false);
        setCorrect("not selected");
        setCorrectOne("not selected");
        setCorrectTwo("not selected");
        setCorrectThree("not selected");
      } else {
        navigate("Score", { score });
      }
    }

    return () => clearInterval(timer);
  }, [counter, questions.length]);
  return (
    <View style={styles.container}>
      <ImageBackground source={images.backGround} style={styles.image}>
        <View style={styles.counterContainer}>
          <MaterialCommunityIcons name="timer-outline" size={24} color="#fff" />
          <Text style={{ color: "#fff" }}>00.00.0{counter}</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={{ fontWeight: "700", fontSize: 15 }}>
            Question {nextNumberQuestion}
          </Text>
          <Text style={{ fontSize: 14 }}>
            {questions.length > 0
              ? questions[nextNumberQuestion].question
              : "Loading..."}
          </Text>
        </View>
        <Text style={{ marginTop: 20, color: "#fff" }}>
          Choose Correct Option
        </Text>
        <ScrollView style={{ marginBottom: 20 }}>
          {questions.length > 0 &&
            questions[nextNumberQuestion].options.map((option, index) => (
              <Answer
                key={index}
                disabled={disabled}
                option={String.fromCharCode(65 + index)}
                correct={
                  index === 0
                    ? correct
                    : index === 1
                    ? correctOne
                    : index === 2
                    ? correctTwo
                    : correctThree
                }
                answerOption={option}
                onPress={() => {
                  handlePress(
                    option,
                    index === 0
                      ? setCorrect
                      : index === 1
                      ? setCorrectOne
                      : index === 2
                      ? setCorrectTwo
                      : setCorrectThree,
                    questions[nextNumberQuestion].answer
                  );
                }}
              />
            ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Game;
