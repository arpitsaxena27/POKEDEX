import { Link } from "react-router-dom";
import usePokDetails from "../hooks/usePokDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/bar.css";
import "../css/bgcolor.css";
import Moves from "./Moves";
import Types from "./Types";
import Evolution from "./Evolution";
import Variety from "./Variety";

function Pokemondetails() {
      const {
            audioUrl,
            cardobj,
            typesArray,
            movesArray,
            abilitiesArray,
            color,
            des,
            habitat,
            id,
      } = usePokDetails();

      const [isPlaying, setIsPlaying] = useState(false);

      function playSound() {
            var audio = document.getElementById("myAudio");
            audio.src = audioUrl;
            setIsPlaying(true);

            audio.play();

            audio.onended = () => {
                  setIsPlaying(false);
            };
      }

      const [similarPokemonsList1, setSimilarPokemonsList1] = useState([]);
      const [similarPokemonsList2, setSimilarPokemonsList2] = useState([]);
      async function similarPokemons() {
            if (typesArray.length === 0) return;
            const response = await axios.get(
                  `https://pokeapi.co/api/v2/type/${typesArray[0].type.name}`
            );
            setSimilarPokemonsList1(response.data.pokemon);
            if (typesArray.length > 1) {
                  const response1 = await axios.get(
                        `https://pokeapi.co/api/v2/type/${typesArray[1].type.name}`
                  );
                  setSimilarPokemonsList2(response1.data.pokemon);
            }
      }

      useEffect(() => {
            similarPokemons();
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [typesArray]);

      return (
            <>
                  <div className={`text-white ${color}bg flex p-5 flex-col gap-10 text-2xl`}>
                        <Link to={`http://localhost:5173/`}>
                              <span className="material-symbols-outlined fixed ml-0 md:ml-5 lg:ml-5 z-50 top-[40px]">
                                    arrow_back
                              </span>
                        </Link>
                        <div className={`lg:hidden flex ${color}bg h-[380px] md:h-[430px] w-screen fixed left-0 top-0`}></div>
                        <div className="flex flex-col justify-center items-center gap-0 md:gap-10 lg:gap-10 mt-[-15px]">
                              <div className="flex items-center gap-4 lg:relative fixed lg:top-0 top-9">
                                    <h1 className="pl-10 md:pl-20 lg:pl-20 text-3xl md:text-5xl lg:text-5xl">
                                          {cardobj.name}
                                    </h1>
                                    <button
                                          className="flex justify-center items-center"
                                          onClick={playSound}
                                    >
                                          {isPlaying ? (
                                                <svg
                                                      className="hidden lg:flex md:flex mt-1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      height="48px"
                                                      viewBox="0 0 48 48"
                                                      width="48px"
                                                      fill="#e8eaed"
                                                >
                                                      <circle
                                                            cx="24"
                                                            cy="24"
                                                            r="24"
                                                            fill="#e8eaed"
                                                      />
                                                      <rect
                                                            x="14"
                                                            y="14"
                                                            width="20"
                                                            height="20"
                                                            fill="#000000"
                                                      />
                                                </svg>
                                          ) : (
                                                <svg
                                                      className="hidden lg:flex md:flex mt-1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      height="48px"
                                                      viewBox="0 0 48 48"
                                                      width="48px"
                                                      fill="#e8eaed"
                                                >
                                                      <circle
                                                            cx="24"
                                                            cy="24"
                                                            r="24"
                                                            fill="#e8eaed"
                                                      />
                                                      <polygon
                                                            points="18,14 34,24 18,34"
                                                            fill="#000000"
                                                      />
                                                </svg>
                                          )}
                                          {isPlaying ? (
                                                <svg
                                                      className="lg:hidden md:hidden flex mt-1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      height="33px"
                                                      viewBox="0 0 48 48"
                                                      width="33px"
                                                      fill="#e8eaed"
                                                >
                                                      <circle
                                                            cx="24"
                                                            cy="24"
                                                            r="24"
                                                            fill="#e8eaed"
                                                      />
                                                      <rect
                                                            x="14"
                                                            y="14"
                                                            width="20"
                                                            height="20"
                                                            fill="#000000"
                                                      />
                                                </svg>
                                          ) : (
                                                <svg
                                                      className="lg:hidden md:hidden flex mt-1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      height="33px"
                                                      viewBox="0 0 48 48"
                                                      width="33px"
                                                      fill="#e8eaed"
                                                >
                                                      <circle
                                                            cx="24"
                                                            cy="24"
                                                            r="24"
                                                            fill="#e8eaed"
                                                      />
                                                      <polygon
                                                            points="18,14 34,24 18,34"
                                                            fill="#000000"
                                                      />
                                                </svg>
                                          )}
                                    </button>
                              </div>
                              <div className="flex-col flex gap-7 w-full lg:px-12 lg:mt-0 md:mt-[400px] mt-96">
                                    <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-x-16 gap-y-10">
                                          <div className="flex flex-col gap-3 w-full lg:w-[800px]">
                                                <div
                                                      className={`text-2xl flex items-center justify-evenly ${color}border  p-5 rounded-lg`}
                                                >
                                                      <p className="lg:text-2xl md:text-2xl text-xl font-extrabold ">
                                                            TYPES
                                                      </p>
                                                      {typesArray.map(
                                                            (item, index) => (
                                                                  <p
                                                                        className={`${color} rounded-lg text-[15px] md:text-2xl lg:text-2xl py-1 px-5`}
                                                                        key={
                                                                              index
                                                                        }
                                                                  >
                                                                        {
                                                                              item
                                                                                    .type
                                                                                    .name
                                                                        }
                                                                  </p>
                                                            )
                                                      )}
                                                </div>
                                                <div
                                                      className={`flex flex-col gap-5 items-center justify-center p-5 ${color}border  rounded-lg`}
                                                >
                                                      <h1 className="text-2xl font-extrabold">
                                                            BASE STATS
                                                      </h1>
                                                      <div className="flex flex-wrap w-full justify-evenly gap-x-16 gap-y-4 md:gap-y-10 lG:gap-y-10">
                                                            <div className="flex w-full">
                                                                  <div
                                                                        className={`lg:w-[300px] md:w-[300px] w-24 flex justify-center px-6 items-center h-10 dark${color} text-sm md:text-lg lg:text-lg font-extrabold text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg`}
                                                                  >
                                                                        <p>
                                                                              HP
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className={`bar text-sm md:text-lg lg:text-lg flex justify-end px-6 items-center h-10 ${color} text-lg font-medium   text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg`}
                                                                              style={{
                                                                                    width: `${
                                                                                          (cardobj.hp /
                                                                                                255) *
                                                                                          100
                                                                                    }%`,
                                                                                    transition:
                                                                                          "width 1s ease-in-out",
                                                                              }}
                                                                        >
                                                                              {
                                                                                    cardobj.hp
                                                                              }
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex w-full">
                                                                  <div
                                                                        className={`lg:w-[300px] md:w-[300px] w-20 flex justify-center px-6 items-center h-10 dark${color} text-sm md:text-lg lg:text-lg font-extrabold text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg`}
                                                                  >
                                                                        <p>
                                                                              SPEED
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className={`bar text-sm md:text-lg lg:text-lg flex justify-end px-6 items-center h-10 ${color} text-lg font-medium   text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg`}
                                                                              style={{
                                                                                    width: `${
                                                                                          (cardobj.speed /
                                                                                                180) *
                                                                                          100
                                                                                    }%`,
                                                                                    transition:
                                                                                          "width 1s ease-in-out",
                                                                              }}
                                                                        >
                                                                              {
                                                                                    cardobj.speed
                                                                              }
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex w-full">
                                                                  <div
                                                                        className={`lg:w-[300px] md:w-[300px] w-20 flex justify-center px-6 items-center h-10 dark${color} text-sm md:text-lg lg:text-lg font-extrabold   text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg`}
                                                                  >
                                                                        <p>
                                                                              ATTACK
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className={`bar text-sm md:text-lg lg:text-lg flex justify-end px-6 items-center h-10 ${color} text-lg font-medium   text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg`}
                                                                              style={{
                                                                                    width: `${
                                                                                          (cardobj.attack /
                                                                                                190) *
                                                                                          100
                                                                                    }%`,
                                                                                    transition:
                                                                                          "width 1s ease-in-out",
                                                                              }}
                                                                        >
                                                                              {
                                                                                    cardobj.attack
                                                                              }
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex w-full">
                                                                  <div
                                                                        className={`lg:w-[300px] md:w-[300px] w-20 flex justify-center px-6 items-center h-10 dark${color} text-sm md:text-lg lg:text-lg font-extrabold   text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg`}
                                                                  >
                                                                        <p>
                                                                              DEFENCE
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className={`bar text-sm md:text-lg lg:text-lg flex justify-end px-6 items-center h-10 ${color} text-lg font-medium   text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg`}
                                                                              style={{
                                                                                    width: `${
                                                                                          (cardobj.defence /
                                                                                                230) *
                                                                                          100
                                                                                    }%`,
                                                                                    transition:
                                                                                          "width 1s ease-in-out",
                                                                              }}
                                                                        >
                                                                              {
                                                                                    cardobj.defence
                                                                              }
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex w-full">
                                                                  <div
                                                                        className={`lg:w-[300px] md:w-[300px] w-20 flex justify-center px-6 items-center h-10 dark${color} text-sm md:text-lg lg:text-lg font-extrabold   text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg`}
                                                                  >
                                                                        <p>
                                                                              SP.
                                                                              ATTACK
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className={`bar text-sm md:text-lg lg:text-lg flex justify-end px-6 items-center h-10 ${color} text-lg font-medium   text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg`}
                                                                              style={{
                                                                                    width: `${
                                                                                          (cardobj.specialattack /
                                                                                                194) *
                                                                                          100
                                                                                    }%`,
                                                                                    transition:
                                                                                          "width 1s ease-in-out",
                                                                              }}
                                                                        >
                                                                              {
                                                                                    cardobj.specialattack
                                                                              }
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex w-full">
                                                                  <div
                                                                        className={`lg:w-[300px] md:w-[300px] w-20 flex justify-center px-6 items-center h-10 dark${color} text-sm md:text-lg lg:text-lg font-extrabold   text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg`}
                                                                  >
                                                                        <p>
                                                                              SP.
                                                                              DEFENCE
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className={`bar text-sm md:text-lg lg:text-lg flex justify-end px-6 items-center h-10 ${color} text-lg font-medium  text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg`}
                                                                              style={{
                                                                                    width: `${
                                                                                          (cardobj.specialdefence /
                                                                                                230) *
                                                                                          100
                                                                                    }%`,
                                                                                    transition:
                                                                                          "width 1s ease-in-out",
                                                                              }}
                                                                        >
                                                                              {
                                                                                    cardobj.specialdefence
                                                                              }
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <img
                                                className="img lg:w-96 lg:h-96 md:w-96 md:h-96 w-72 h-72 mr-0 lg:mr-10 lg:relative fixed lg:top-0 top-20"
                                                src={cardobj.image}
                                                alt=""
                                          />
                                    </div>
                                    <div
                                          className={`flex flex-col gap-5 items-center justify-center p-5 ${color}border rounded-lg`}
                                    >
                                          <h1 className="text-2xl font-extrabold">
                                                ABILITIES
                                          </h1>
                                          <div className="flex flex-wrap justify-evenly gap-x-16 gap-y-10">
                                                {abilitiesArray.map(
                                                      (item, index) => (
                                                            <p
                                                                  className={`${color} rounded-lg py-1 px-5`}
                                                                  key={index}
                                                            >
                                                                  {
                                                                        item
                                                                              .ability
                                                                              .name
                                                                  }
                                                            </p>
                                                      )
                                                )}
                                          </div>
                                    </div>
                                    <div
                                          className={`${color}border rounded-lg flex flex-col justify-between items-center p-2 md:p-10 lg:p-10 `}
                                    >
                                          <p className="font-extrabold text-2xl">
                                                SPECIES
                                          </p>
                                          <div className="flex justify-center items-center m-5">
                                                <p className=" text-center">
                                                      {des}
                                                </p>
                                          </div>
                                          <div className="flex w-full flex-wrap justify-center items-center">
                                                <div className="flex m-2 justify-center items-center w-full md:w-[48%] lg:w-[48%] text-lg font-extrabold">
                                                      <div
                                                            className={`dark${color} flex justify-center w-1/2 p-1 rounded-bl-lg rounded-tl-lg`}
                                                      >
                                                            HEIGHT
                                                      </div>
                                                      <div
                                                            className={`${color} flex justify-center w-1/2 p-1 rounded-br-lg rounded-tr-lg font-medium`}
                                                      >
                                                            {cardobj.height /
                                                                  10}
                                                            &nbsp;m
                                                      </div>
                                                </div>
                                                <div className="flex m-2 justify-center items-center w-full md:w-[48%] lg:w-[48%] text-lg font-extrabold">
                                                      <div
                                                            className={`dark${color} flex justify-center w-1/2 p-1 rounded-bl-lg rounded-tl-lg`}
                                                      >
                                                            WEIGHT
                                                      </div>
                                                      <div
                                                            className={`${color} flex justify-center w-1/2 p-1 rounded-br-lg rounded-tr-lg font-medium`}
                                                      >
                                                            {cardobj.weight /
                                                                  10}
                                                            &nbsp;kg
                                                      </div>
                                                </div>
                                                {habitat ? (
                                                      <div className="flex m-2 justify-center items-center w-full md:w-[48%] lg:w-[48%] text-lg font-extrabold">
                                                            <div
                                                                  className={`dark${color} flex justify-center w-1/2 p-1 rounded-bl-lg rounded-tl-lg`}
                                                            >
                                                                  HABITAT
                                                            </div>
                                                            <div
                                                                  className={`${color} flex justify-center w-1/2 p-1 rounded-br-lg rounded-tr-lg font-medium`}
                                                            >
                                                                  {habitat}
                                                            </div>
                                                      </div>
                                                ) : (
                                                      <p></p>
                                                )}
                                          </div>
                                    </div>
                                    <div
                                          className={`${color}border rounded-lg flex-col flex justify-center items-center p-10 `}
                                    >
                                          <p className="font-extrabold text-2xl text-center">
                                                EVOLUTION CHAIN
                                          </p>
                                          <Evolution id={id}></Evolution>
                                    </div>
                                    <div
                                          className={`${color}border rounded-lg flex-col flex justify-center items-center p-10 `}
                                    >
                                          <p className="font-extrabold text-2xl text-center">
                                                ALTERNATIVE FORMS
                                          </p>
                                          <Variety></Variety>
                                    </div>
                                    <Moves
                                          array={movesArray}
                                          color={color}
                                    ></Moves>
                                    <Types
                                          color={color}
                                          typesArray={typesArray}
                                          similarPokemonsList1={
                                                similarPokemonsList1
                                          }
                                          similarPokemonsList2={
                                                similarPokemonsList2
                                          }
                                    ></Types>
                              </div>
                        </div>
                  </div>
            </>
      );
}
export default Pokemondetails;
