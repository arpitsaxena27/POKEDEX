import { Link } from "react-router-dom";
import usePokDetails from "../hooks/usePokDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/bar.css";
import Moves from "./Moves";
import Types from "./Types";

function Pokemondetails() {
      const { audioUrl, cardobj, typesArray, movesArray, abilitiesArray } =
            usePokDetails();

      function playSound() {
            var audio = document.getElementById("myAudio");
            audio.src = audioUrl;
            audio.play();
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
                  <div className="text-white m-5 flex flex-col gap-10 text-2xl">
                        <Link to={`http://localhost:5173/`}>
                              <span className="text-4xl material-symbols-outlined fixed">
                                    arrow_back
                              </span>
                        </Link>
                        <div className="flex flex-col justify-center items-center gap-10 mt-[-40px]">
                              <div className="flex items-center gap-4">
                                    <h1 className="pl-20 text-5xl">
                                          {cardobj.name}
                                    </h1>
                                    <button
                                          className="flex items-center"
                                          onClick={playSound}
                                    >
                                          <span className="text-5xl material-symbols-outlined">
                                                play_circle
                                          </span>
                                    </button>
                              </div>
                              <div className="flex-col flex gap-7 w-full px-12">
                                    <div className="flex items-center gap-x-16 gap-y-10">
                                          <div className="flex flex-col gap-3 w-[800px]">
                                                <div className="text-2xl flex justify-evenly border-8 p-5 border-slate-600 rounded-lg">
                                                      <p className="text-2xl font-extrabold ">
                                                            TYPES
                                                      </p>
                                                      {typesArray.map(
                                                            (item, index) => (
                                                                  <p
                                                                        className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400"
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
                                                <div className="flex flex-col gap-5 items-center justify-center border-8 p-5 border-slate-600 rounded-lg">
                                                      <h1 className="text-2xl font-extrabold">
                                                            BASE STATS
                                                      </h1>
                                                      <div className="flex flex-wrap justify-evenly gap-x-16 gap-y-10">
                                                            <div className="flex w-full">
                                                                  <div className="w-[300px] flex justify-center px-6 items-center h-10 bg-blue-800 text-lg font-extrabold text-blue-100 text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg">
                                                                        <p className="text-white">
                                                                              HP
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className="bar flex justify-end px-6 items-center h-10 bg-blue-600 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg"
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
                                                                  <div className="w-[300px] flex justify-center px-6 items-center h-10 bg-blue-800 text-lg font-extrabold text-blue-100 text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg">
                                                                        <p className="text-white">
                                                                              SPEED
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className="bar flex justify-end px-6 items-center h-10 bg-blue-600 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg"
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
                                                                  <div className="w-[300px] flex justify-center px-6 items-center h-10 bg-blue-800 text-lg font-extrabold text-blue-100 text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg">
                                                                        <p className="text-white">
                                                                              ATTACK
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className="bar flex justify-end px-6 items-center h-10 bg-blue-600 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg"
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
                                                                  <div className="w-[300px] flex justify-center px-6 items-center h-10 bg-blue-800 text-lg font-extrabold text-blue-100 text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg">
                                                                        <p className="text-white">
                                                                              DEFENCE
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className="bar flex justify-end px-6 items-center h-10 bg-blue-600 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg"
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
                                                                  <div className="w-[300px] flex justify-center px-6 items-center h-10 bg-blue-800 text-lg font-extrabold text-blue-100 text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg">
                                                                        <p className="text-white">
                                                                              SP. ATTACK
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className="bar flex justify-end px-6 items-center h-10 bg-blue-600 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg"
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
                                                                  <div className="w-[300px] flex justify-center px-6 items-center h-10 bg-blue-800 text-lg font-extrabold text-blue-100 text-center p-0.5 leading-none rounded-bl-lg rounded-tl-lg">
                                                                        <p className="text-white">
                                                                              SP. DEFENCE
                                                                        </p>
                                                                  </div>
                                                                  <div className="flex w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700">
                                                                        <div
                                                                              className="bar flex justify-end px-6 items-center h-10 bg-blue-600 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-br-lg rounded-tr-lg"
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
                                                            <div className="flex justify-center items-center w-2/5 text-lg font-extrabold">
                                                                  <div className="bg-blue-800 flex justify-center w-1/2 p-1 rounded-bl-lg rounded-tl-lg">HEIGHT</div>
                                                                  <div className="bg-blue-600 flex justify-center w-1/2 p-1 rounded-br-lg rounded-tr-lg font-medium">{cardobj.height}</div>
                                                            </div>
                                                            <div className="flex justify-center items-center w-2/5 text-lg font-extrabold">
                                                                  <div className="bg-blue-800 flex justify-center w-1/2 p-1 rounded-bl-lg rounded-tl-lg">WEIGHT</div>
                                                                  <div className="bg-blue-600 flex justify-center w-1/2 p-1 rounded-br-lg rounded-tr-lg font-medium">{cardobj.weight}</div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <img
                                                className="w-96 h-96"
                                                src={cardobj.image}
                                                alt=""
                                          />
                                    </div>
                                    <div className="flex flex-col gap-5 items-center justify-center border-8 p-5 border-slate-600 rounded-lg">
                                          <h1 className="text-2xl font-extrabold">
                                                ABILITIES
                                          </h1>
                                          <div className="flex flex-wrap justify-evenly gap-x-16 gap-y-10">
                                                {abilitiesArray.map(
                                                      (item, index) => (
                                                            <p
                                                                  className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400"
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
                                    <Moves array={movesArray}></Moves>
                                    <Types typesArray={typesArray} similarPokemonsList1={similarPokemonsList1} similarPokemonsList2={similarPokemonsList2}></Types>
                              </div>
                        </div>
                  </div>
            </>
      );
}
export default Pokemondetails;
