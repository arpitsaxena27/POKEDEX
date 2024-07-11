import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Evolution({ id  ,obj}) {
      const [imageUrl3, setImageUrl3] = useState("");
      const [imageUrl2, setImageUrl2] = useState("");
      const [imageUrl, setImageUrl] = useState("");
      const [pokname3, setPokName3] = useState("");
      const [pokname2, setPokName2] = useState("");
      const [pokname, setPokName] = useState("");

      const navigate = useNavigate();

      function changecard(pokemonname) {
            console.log("hello");
            navigate(`/pokemon/${pokemonname}`);
      }

      async function fetch() {
            try {
                  const response1 = await axios.get(
                        `https://pokeapi.co/api/v2/pokemon-species/${id}`
                  );
                  const response = await axios.get(
                        response1.data.evolution_chain.url
                  );
      
                  const name1 = response.data.chain.species.name;
      
                  if (response.data.chain.evolves_to.length > 0) {
                        const name2 = response.data.chain.evolves_to[0].species.name;
                        const finalresponse2 = await axios.get(
                              `https://pokeapi.co/api/v2/pokemon/${name2}`
                        );
                        setImageUrl2(
                              finalresponse2.data.sprites.other.home.front_default ||
                                    finalresponse2.data.sprites.front_default
                        );
                        setPokName2(name2);
                        if (response.data.chain.evolves_to[0].evolves_to.length > 0) {
                              const name3 =
                                    response.data.chain.evolves_to[0].evolves_to[0]
                                          .species.name;
                              const finalresponse3 = await axios.get(
                                    `https://pokeapi.co/api/v2/pokemon/${name3}`
                              );
                              setImageUrl3(
                                    finalresponse3.data.sprites.other.home
                                          .front_default ||
                                          finalresponse3.data.sprites.front_default
                              );
                              setPokName3(name3);
                        } else {
                              setImageUrl3("");
                              setPokName3("");
                        }
                  } else {
                        setImageUrl2("");
                        setPokName2("");
                  }
                  const finalresponse1 = await axios.get(
                        `https://pokeapi.co/api/v2/pokemon/${name1}`
                  );
                  setImageUrl(
                        finalresponse1.data.sprites.other.home.front_default ||
                              finalresponse1.data.sprites.front_default
                  );
                  setPokName(name1);
            } catch (error) {
                  console.log("data not found")
            }
      }

      useEffect(() => {
            fetch();
      }, [id]);

      return (
            <>
                  {imageUrl?(<div className="flex lg:flex-row flex-col w-full justify-center items-center gap-16 m-10">
                        {imageUrl3 || imageUrl2 ? (
                              <div
                                    onClick={() => changecard(pokname)}
                                    className="flex justify-center items-center flex-col"
                              >
                                    <p className="m-5">{pokname}</p>
                                    <img
                                          className="w-40 h-40"
                                          src={imageUrl}
                                          alt=""
                                    />
                              </div>
                        ) : (
                              <div
                                    onClick={() => changecard(pokname)}
                                    className="flex justify-center items-center ml-28 flex-col"
                              >
                                    <p className="m-5">{pokname}</p>
                                    <img
                                          className="w-40 h-40"
                                          src={imageUrl}
                                          alt=""
                                    />
                              </div>
                        )}

                        {imageUrl2 ? (
                              <div className="flex lg:flex-row flex-col justify-center gap-16 items-center">
                                    <svg
                                          className="hidden lg:flex"
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="48px"
                                          viewBox="0 -960 960 960"
                                          width="48px"
                                          fill="#e8eaed"
                                    >
                                          <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z" />
                                    </svg>
                                    <svg className="lg:hidden flex"
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="48px"
                                          viewBox="0 -960 960 960"
                                          width="48px"
                                          fill="#e8eaed"
                                    >
                                          <path d="M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z" />
                                    </svg>
                                    <div
                                          onClick={() => changecard(pokname2)}
                                          className="flex justify-center items-center flex-col"
                                    >
                                          <p className="m-5">{pokname2}</p>
                                          <img
                                                className="w-40 h-40"
                                                src={imageUrl2}
                                                alt=""
                                          />
                                    </div>
                              </div>
                        ) : (
                              <p></p>
                        )}

                        {imageUrl3 ? (
                              <div className="flex lg:flex-row flex-col justify-center gap-16 items-center">
                                    <svg
                                          className="hidden lg:flex"
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="48px"
                                          viewBox="0 -960 960 960"
                                          width="48px"
                                          fill="#e8eaed"
                                    >
                                          <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z" />
                                    </svg>
                                    <svg className="lg:hidden flex"
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="48px"
                                          viewBox="0 -960 960 960"
                                          width="48px"
                                          fill="#e8eaed"
                                    >
                                          <path d="M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z" />
                                    </svg>
                                    <div
                                          onClick={() => changecard(pokname3)}
                                          className="flex justify-center items-center flex-col"
                                    >
                                          <p className="m-5">{pokname3}</p>
                                          <img
                                                className="w-40 h-40"
                                                src={imageUrl3}
                                                alt=""
                                          />
                                    </div>
                              </div>
                        ) : (
                              <p></p>
                        )}
                  </div>):(<p className="mt-10">pokemon unable to evolve</p>)}
            </>
      );
}

export default Evolution;
