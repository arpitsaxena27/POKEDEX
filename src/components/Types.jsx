/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Icons from "./Icons";
function Types({ typesArray, similarPokemonsList1, similarPokemonsList2 ,color }) {
      const navigate = useNavigate();
      function changecard(pokemonname) {
            console.log("hello");
            navigate(`/pokemon/${pokemonname}`);
      }
      const [expanded, setExpanded] = useState(false);
      const [expanded2, setExpanded2] = useState(false);

      const toggleExpand = () => {
            setExpanded(!expanded);
      };
      const toggleExpand2 = () => {
            setExpanded2(!expanded2);
      };
      return (
            <>
                  <div className={`flex flex-col gap-5 items-center justify-center p-0 md:p-5 lg:p-5 ${color}border rounded-lg`}>
                        {typesArray.length > 0 ? (
                              <div className="flex flex-col gap-5 items-center justify-center p-2 md:p-5  lg:p-5  rounded-lg">
                                    <div
                                          className={`${
                                                expanded
                                                      ? "h-full lg:h-full"
                                                      : "h-[1400px] lg:h-[996px]"
                                          } overflow-hidden`}
                                    >
                                          <h1 className={`${color}  rounded-lg py-1 px-5 text-2xl font-extrabold`}>
                                                {typesArray[0].type.name} type
                                                pokemons
                                          </h1>
                                          <ul className="flex flex-wrap m-2">
                                                {similarPokemonsList1.map(
                                                      (pokemon, index) => (
                                                            <li
                                                                  onClick={() =>
                                                                        changecard(
                                                                              pokemon
                                                                                    .pokemon
                                                                                    .name
                                                                        )
                                                                  }
                                                                  className="my-2 mx-0 md:mx-2 lg:mx-2 lg:w-[48%] w-full"
                                                                  key={index}
                                                            >
                              
                                                                        <Icons
                                                                              pokemon={
                                                                                    pokemon
                                                                              }
                                                                        ></Icons>
                                          
                                                            </li>
                                                      )
                                                )}
                                          </ul>
                                    </div>
                                    <button
                                          className={`mt-4 flex justify-center items-center mb-4 ${color} text-white rounded-full`}
                                          onClick={toggleExpand}
                                    >
                                          {expanded ? (
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      height="48px"
                                                      viewBox="0 -960 960 960"
                                                      width="48px"
                                                      fill="#e8eaed"
                                                >
                                                      <path d="m280-400 200-201 200 201H280Z" />
                                                </svg>
                                          ) : (
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      height="48px"
                                                      viewBox="0 -960 960 960"
                                                      width="48px"
                                                      fill="#e8eaed"
                                                >
                                                      <path d="M480-360 280-559h400L480-360Z" />
                                                </svg>
                                          )}
                                    </button>
                              </div>
                        ) : (
                              <></>
                        )}
                        {typesArray.length > 1 ? (
                              <div className="flex flex-col gap-5 items-center justify-center p-2 md:p-5  lg:p-5  rounded-lg">
                              <div
                                    className={`${
                                          expanded2
                                                ? "h-full lg:h-full"
                                                : "h-[1400px] lg:h-[996px]"
                                    } overflow-hidden`}
                              >
                                    <h1 className={`${color}  rounded-lg py-1 px-5 text-2xl font-extrabold`}>
                                          {typesArray[1].type.name} type
                                          pokemons
                                    </h1>
                                    <ul className="flex flex-wrap m-2">
                                          {similarPokemonsList2.map(
                                                (pokemon, index) => (
                                                      <li
                                                            onClick={() =>
                                                                  changecard(
                                                                        pokemon
                                                                              .pokemon
                                                                              .name
                                                                  )
                                                            }
                                                            className="my-2 mx-0 md:mx-2 lg:mx-2 lg:w-[48%] w-full"
                                                            key={index}
                                                      >
                        
                                                                  <Icons
                                                                        pokemon={
                                                                              pokemon
                                                                        }
                                                                  ></Icons>
                                    
                                                      </li>
                                                )
                                          )}
                                    </ul>
                              </div>
                              <button
                                    className={`mt-4 flex justify-center items-center mb-4 ${color} text-white rounded-full`}
                                    onClick={toggleExpand2}
                              >
                                    {expanded2 ? (
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="48px"
                                                viewBox="0 -960 960 960"
                                                width="48px"
                                                fill="#e8eaed"
                                          >
                                                <path d="m280-400 200-201 200 201H280Z" />
                                          </svg>
                                    ) : (
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="48px"
                                                viewBox="0 -960 960 960"
                                                width="48px"
                                                fill="#e8eaed"
                                          >
                                                <path d="M480-360 280-559h400L480-360Z" />
                                          </svg>
                                    )}
                              </button>
                        </div>
                        ) : (
                              <></>
                        )}
                  </div>
            </>
      );
}
export default Types;
