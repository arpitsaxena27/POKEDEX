/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Types({ typesArray, similarPokemonsList1, similarPokemonsList2 }) {
      const navigate = useNavigate();
      function changecard(pokemonname) {
            console.log("hello");
            navigate(`/pokemon/${pokemonname}`);
      }
      const [expanded, setExpanded] = useState(false);

      const toggleExpand = () => {
            setExpanded(!expanded);
      };
      return (
            <>
                  <div className="flex flex-col overflow-hidden justify-center items-center border-8 border-slate-600">
                        <div
                              className={`flex  ${
                                    expanded ? "h-full" : "h-28"
                              } flex-col gap-5 items-center justify-center p-5 rounded-lg`}
                        >
                              {typesArray.length > 0 ? (
                                    <div>
                                          <h1 className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400 text-2xl font-extrabold">
                                                {typesArray[0].type.name} type
                                                pokemons
                                          </h1>
                                          <ul className="list-disc flex flex-wrap">
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
                                                                  className="m-10"
                                                                  key={index}
                                                            >
                                                                  {
                                                                        pokemon
                                                                              .pokemon
                                                                              .name
                                                                  }
                                                            </li>
                                                      )
                                                )}
                                          </ul>
                                    </div>
                              ) : (
                                    <></>
                              )}
                              {typesArray.length > 1 ? (
                                    <div>
                                          <h1 className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400 text-2xl font-extrabold">
                                                {typesArray[1].type.name} type
                                                pokemons
                                          </h1>
                                          <ul className="list-disc flex flex-wrap">
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
                                                                  className="m-10"
                                                                  key={index}
                                                            >
                                                                  {
                                                                        pokemon
                                                                              .pokemon
                                                                              .name
                                                                  }
                                                            </li>
                                                      )
                                                )}
                                          </ul>
                                    </div>
                              ) : (
                                    <></>
                              )}
                        </div>
                        <button
                              className="mt-4 mb-4 px-4 py-2 bg-blue-700 text-white rounded"
                              onClick={toggleExpand}
                        >
                              {expanded ? "Collapse" : "Expand"}
                        </button>
                  </div>
            </>
      );
}
export default Types;
