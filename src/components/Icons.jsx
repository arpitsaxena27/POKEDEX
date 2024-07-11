/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/bgcolor.css";

function Icons({ pokemon }) {
      const [imageLink, setImageLink] = useState("");
      const [color, setColor] = useState("");

      const link = pokemon.pokemon.url;
      async function fetchlink() {
            const response = await axios.get(link);
            setImageLink(
                        response.data.sprites.other.home.front_default ||
                        response.data.sprites.front_default
            );
            const id = response.data.id;
            console.log(id);
            try {
                  const response2 = await axios.get(
                        `https://pokeapi.co/api/v2/pokemon-species/${id}`
                  );
                  if (response2.data.color.name === "black")
                        setColor(
                              response2.data.color.name +
                                    " " +
                                    "border-2 border-white"
                        );
                        else if (response2.data.color.name === "white")
                            setColor(
                                response2.data.color.name +
                                      " " +
                                      "text-black"
                          );
                  else setColor(response2.data.color.name);
                  console.log(response2.data.color.name);
            } catch (error) {
                  console.log("color not given in database");
            }
      }

      useEffect(() => {
            fetchlink();
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [link]);

      return (
            <>
                  <div
                        className={`flex rounded-lg ${color} bg-slate-600 justify-evenly items-center `}
                  >
                        <p className="mx-5 text-xl md:text-3xl lg:text-3xl flex flex-col justify-center items-center">
                              {pokemon.pokemon.name}
                        </p>
                        <img
                              className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32"
                              src={
                                    imageLink ||
                                    "https://img.icons8.com/?size=160&id=CqEMtbv6-5US&format=png"
                              }
                              alt="pimage"
                        />
                  </div>
            </>
      );
}

export default Icons;
