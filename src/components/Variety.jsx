import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Variety() {
      const [varieties, setVarieties] = useState([]);
      const navigate = useNavigate();
      const { id } = useParams();

      function changecard(pokemonname) {
            console.log("hello");
            navigate(`/pokemon/${pokemonname}`);
      }

      async function objectCreate(element) {
            const response = await axios.get(element.pokemon.url);
            const image =
                  response.data.sprites.other.dream_world.front_default ||
                  response.data.sprites.other.home.front_default ||
                  response.data.sprites.front_default;
            const obj = {
                  name: element.pokemon.name,
                  image: image,
            };
            return obj;
      }

      async function fetch() {
            try {
                  const response1 = await axios.get(
                        `https://pokeapi.co/api/v2/pokemon-species/${id}`
                  );
                  console.log(response1)
                  if (response1.data.varieties.length > 1) {
                        let arr;
                        if (id === "pikachu"|| response1.data.names[1].name=== "Pikachu")
                              arr = [response1.data.varieties.slice(-1)[0]];
                        else arr = response1.data.varieties.slice(1);
                        // Create an array of promises using map
                        const promises = arr.map((element) => objectCreate(element));
      
                        // Wait for all promises to resolve
                        const array = await Promise.all(promises);
      
                        // Update the state with the resolved values
                        setVarieties(array);
                  } else setVarieties([]);
            } catch (error) {
                  console.log("data not available")
            }
      }

      useEffect(() => {
            fetch();
      }, [id]);

      return (
            <div className="flex flex-wrap justify-center gap-20 items-center m-10">
                  {varieties.length > 0 ? (
                        varieties.map((data, index) => (
                              <div
                                    onClick={() => changecard(data.name)}
                                    className="flex flex-wrap  w-auto flex-col justify-center items-center"
                                    key={index}
                              >
                                    <p className="text-2xl text-center font-extrabold mb-5">
                                          {data.name}
                                    </p>
                                    <img
                                          className="w-52 h-52"
                                          src={data.image}
                                          alt={data.name}
                                    />
                              </div>
                        ))
                  ) : (
                        <p>No alternative form exists for this Pokémon</p>
                  )}
            </div>
      );
}

export default Variety;
