import axios from "axios";
import { useState } from "react";

export const UseGetQuestionsHook = () => {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<unknown>(null);

  const getQuestionsHook = async () => {
    try {
      const header = {};
      const url =
        "https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986";
      const response = await axios.get(url, header);

      setData(response.data);
      return response.data;
    } catch (error) {
      setError(err?.message ?? "Unknown error");
    }
  };

  return {
    getQuestionsHook,
    error,
  };
};
