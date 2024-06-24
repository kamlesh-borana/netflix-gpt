import React, { useRef } from "react";
import { BANNER_IMG_URL } from "../config";
import languageConstants from "../config/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGPTSuggestedMovieNames } from "../redux/gptSearchSlice";
import GPTSuggestion from "./GPTSuggestion";

const GPTSearch = () => {
  const { lang } = useSelector((store) => store.config);
  const { gptSuggestedMovieNames } = useSelector((store) => store.gptSearch);

  const searchText = useRef(null);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (searchText.current.value) {
      const query = `Act as a Movie Recommendation System and suggest some movies for the query : ${searchText.current.value}. Only give me 5 movie names in a list of comma separated values like the example given ahead. Example : Hera Pheri,Munna Bhai MBBS,Golmaal,Bhaagam Bhaag,Welcome`;

      try {
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: "user", content: query }],
          model: "gpt-3.5-turbo",
        });
        console.log(chatCompletion);
        dispatch(
          addGPTSuggestedMovieNames(
            chatCompletion.choices[0].message.content.split(",")
          )
        );
      } catch (error) {
        if (error.type === "insufficient_quota" && error.status === 429) {
          // const res = {
          //   id: "chatcmpl-7afXZQ4ZWkdGnZzKnWJDJdC1U6x4d",
          //   object: "chat.completion",
          //   created: 1678510000,
          //   model: "gpt-3.5-turbo-0301",
          //   choices: [
          //     {
          //       index: 0,
          //       message: {
          //         role: "assistant",
          //         content:
          //           "Hera Pheri,Andaz Apna Apna,Dil Chahta Hai,Munna Bhai MBBS,Hungama",
          //       },
          //       finish_reason: "stop",
          //     },
          //   ],
          //   usage: {
          //     prompt_tokens: 53,
          //     completion_tokens: 12,
          //     total_tokens: 65,
          //   },
          // };
          const res = {
            id: "chatcmpl-7afXZQ4ZWkdGnZzKnWJDJdC1U6x4d",
            object: "chat.completion",
            created: 1678510000,
            model: "gpt-3.5-turbo-0301",
            choices: [
              {
                index: 0,
                message: {
                  role: "assistant",
                  content:
                    "Hera Pheri,Andaz Apna Apna,Munna Bhai MBBS,Golmaal,Welcome,Bhool Bhulaiyaa,Hungama,Dulhe Raja,Haseena Maan Jaayegi,Bade Miyan Chote Miyan,Bhagam Bhag,Jodi No.1,No Entry,Partner,Phir Hera Pheri",
                },
                finish_reason: "stop",
              },
            ],
            usage: {
              prompt_tokens: 53,
              completion_tokens: 31,
              total_tokens: 84,
            },
          };
          dispatch(
            addGPTSuggestedMovieNames(res.choices[0].message.content.split(","))
          );
        }
      }
    }
  };

  return (
    <>
      <div className="fixed flex justify-center h-screen w-full">
        <img
          src={BANNER_IMG_URL}
          className="relative -z-10 h-full w-full object-cover"
          alt="wall of movie and shows on netflix"
        />
        <div className="bg-black bg-opacity-60 absolute w-full h-full"></div>
      </div>

      <div className="w-full absolute top-[30%] md:top-[25%] flex flex-col items-center">
        <form
          className="w-full md:w-1/2 lg:w-1/3 bg-black text-white p-4 grid grid-cols-12 gap-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={searchText}
            className="col-span-9 p-2 bg-gray-600 text-sm"
            placeholder={languageConstants[lang].gptSearchPlaceholder}
          />
          <button
            className="bg-red-600 py-2 rounded-lg col-span-3"
            onClick={handleSearch}
          >
            {languageConstants[lang].gptSearchBtnText}
          </button>
        </form>

        {gptSuggestedMovieNames && <GPTSuggestion />}
      </div>
    </>
  );
};

export default GPTSearch;
