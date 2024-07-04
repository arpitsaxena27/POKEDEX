import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Pokemondetails() {
      const { id } = useParams();
      const [cardobj, setCardObj] = useState({});
      const [typesArray, setTypesArray] = useState([]);
      const [abilitiesArray, setAbilitiesArray] = useState([]);
      const [movesArray, setMovesArray] = useState([]);
      const [audioUrl, setAudioUrl] = useState("");
      function playSound() {
            var audio = document.getElementById("myAudio");
            audio.src = audioUrl;
            audio.play();
      }
      async function pokdet() {
            window.scrollTo(0, 0);
            const response = await axios.get(
                  `https://pokeapi.co/api/v2/pokemon/${id}`
            );
            console.log(response.data);

            setTypesArray(response.data.types);
            setAbilitiesArray(response.data.abilities);
            setMovesArray(response.data.moves);
            setAudioUrl(
                  response.data.cries.legacy || response.data.cries.latest
            );

            const obj = {
                  name: response.data.name.toUpperCase(),
                  image:
                        response.data.sprites.other.dream_world.front_default ||
                        response.data.sprites.front_default,
                  height: response.data.height,
                  weight: response.data.weight,
                  hp: response.data.stats[0].base_stat,
                  attack: response.data.stats[1].base_stat,
                  defence: response.data.stats[2].base_stat,
                  specialattack: response.data.stats[3].base_stat,
                  specialdefence: response.data.stats[4].base_stat,
                  speed: response.data.stats[5].base_stat,
            };
            setCardObj(obj);
            console.log(audioUrl);
            console.log(obj);
      }

      useEffect(() => {
            pokdet();
      }, []);

      return (
            <>
                  <div className="m-5 flex flex-col gap-10 text-2xl text-cyan-900">
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
                                    <button className="flex items-center" onClick={playSound}>
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
                                                            <p>
                                                                  hp-
                                                                  {cardobj.hp}
                                                            </p>
                                                            <p>
                                                                  speed-
                                                                  {
                                                                        cardobj.speed
                                                                  }
                                                            </p>
                                                            <p>
                                                                  height-
                                                                  {
                                                                        cardobj.height
                                                                  }
                                                            </p>
                                                            <p>
                                                                  weight-
                                                                  {
                                                                        cardobj.weight
                                                                  }
                                                            </p>
                                                            <p>
                                                                  attack-
                                                                  {
                                                                        cardobj.attack
                                                                  }
                                                            </p>
                                                            <p>
                                                                  defence-
                                                                  {
                                                                        cardobj.defence
                                                                  }
                                                            </p>
                                                            <p>
                                                                  special-attack-
                                                                  {
                                                                        cardobj.specialattack
                                                                  }
                                                            </p>
                                                            <p>
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
                                                            <p key={index}>
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
                                                            <p key={index}>
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
                              </div>
                        </div>
                  </div>
            </>
      );
}
export default Pokemondetails;
