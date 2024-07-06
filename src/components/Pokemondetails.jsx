import { Link, useNavigate } from "react-router-dom";
import usePokDetails from "../hooks/usePokDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function Pokemondetails() {
      const navigate = useNavigate();
      const { audioUrl, cardobj, typesArray, movesArray, abilitiesArray } =
            usePokDetails();

      function changecard(pokemonname) {
            console.log("hello");
            navigate(`/pokemon/${pokemonname}`);
      }

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
                  <div className="m-5 flex flex-col gap-10 text-2xl">
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
                                                            TYPES:
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
                                                            STATS:
                                                      </h1>
                                                      <div className="flex flex-wrap justify-evenly gap-x-16 gap-y-10">
                                                            <p className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400">
                                                                  hp-
                                                                  {cardobj.hp}
                                                            </p>
                                                            <p className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400">
                                                                  speed-
                                                                  {
                                                                        cardobj.speed
                                                                  }
                                                            </p>
                                                            <p className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400">
                                                                  height-
                                                                  {
                                                                        cardobj.height
                                                                  }
                                                            </p>
                                                            <p className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400">
                                                                  weight-
                                                                  {
                                                                        cardobj.weight
                                                                  }
                                                            </p>
                                                            <p className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400">
                                                                  attack-
                                                                  {
                                                                        cardobj.attack
                                                                  }
                                                            </p>
                                                            <p className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400">
                                                                  defence-
                                                                  {
                                                                        cardobj.defence
                                                                  }
                                                            </p>
                                                            <p className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400">
                                                                  special-attack-
                                                                  {
                                                                        cardobj.specialattack
                                                                  }
                                                            </p>
                                                            <p className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400">
                                                                  special-defence-
                                                                  {
                                                                        cardobj.specialdefence
                                                                  }
                                                            </p>
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
                                                ABILITIES:
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
                                    <div className="flex flex-col gap-5 items-center justify-center border-8 p-5 border-slate-600 rounded-lg">
                                          <h1 className="text-2xl font-extrabold">
                                                MOVES:
                                          </h1>
                                          <div className="flex flex-wrap justify-evenly gap-x-16 gap-y-10">
                                                {movesArray.map(
                                                      (item, index) => (
                                                            <p
                                                                  className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400"
                                                                  key={index}
                                                            >
                                                                  {
                                                                        item
                                                                              .move
                                                                              .name
                                                                  }
                                                            </p>
                                                      )
                                                )}
                                          </div>
                                    </div>
                                    <div className="flex flex-col gap-5 items-center justify-center border-8 p-5 border-slate-600 rounded-lg">
                                          {typesArray.length > 0 ? (
                                                <div>
                                                      <h1 className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400 text-2xl font-extrabold">
                                                            {
                                                                  typesArray[0]
                                                                        .type
                                                                        .name
                                                            }{" "}
                                                            type pokemons
                                                      </h1>
                                                      <ul className="list-disc flex flex-wrap">
                                                            {similarPokemonsList1.map(
                                                                  (
                                                                        pokemon,
                                                                        index
                                                                  ) => (
                                                                        <li
                                                                              onClick={() =>
                                                                                    changecard(
                                                                                          pokemon
                                                                                                .pokemon
                                                                                                .name
                                                                                    )
                                                                              }
                                                                              className="m-10"
                                                                              key={
                                                                                    index
                                                                              }
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
                                                            {
                                                                  typesArray[1]
                                                                        .type
                                                                        .name
                                                            }{" "}
                                                            type pokemons
                                                      </h1>
                                                      <ul className="list-disc flex flex-wrap">
                                                            {similarPokemonsList2.map(
                                                                  (
                                                                        pokemon,
                                                                        index
                                                                  ) => (
                                                                        <li
                                                                              onClick={() =>
                                                                                    changecard(
                                                                                          pokemon
                                                                                                .pokemon
                                                                                                .name
                                                                                    )
                                                                              }
                                                                              className="m-10"
                                                                              key={
                                                                                    index
                                                                              }
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
                              </div>
                        </div>
                  </div>
            </>
      );
}
export default Pokemondetails;
