/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function usePokDetails() {
      const { id } = useParams();
      const [cardobj, setCardObj] = useState({});
      const [typesArray, setTypesArray] = useState([]);
      const [abilitiesArray, setAbilitiesArray] = useState([]);
      const [movesArray, setMovesArray] = useState([]);
      const [des, setDes] = useState([]);
      const [habitat, setHabitat] = useState("Unknown");
      const [audioUrl, setAudioUrl] = useState("");
      const [color, setColor] = useState("slate");
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
                        response.data.sprites.other.home.front_default ||
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
            console.log(obj);
      }
      async function pokcolor() {
            try {
                  const response = await axios.get(
                        `https://pokeapi.co/api/v2/pokemon-species/${id}`
                  );
                  console.log(response.data.habitat.name);
                  if (response.data.color.name) setColor(response.data.color.name);
                  else setColor("slate");
                  function replaceFormFeedWithSpace(input) {
                        return input.replace(/\f/g, " ");
                  }
      
                  const inputString =
                        response.data.flavor_text_entries[3].flavor_text ||
                        response.data.flavor_text_entries[0].flavor_text;
                  const resultString = replaceFormFeedWithSpace(inputString);
      
                  setDes(resultString);
                  setHabitat(response.data.habitat.name);
            } catch (error) {
                  console.log("data not found")
            }
      }

      useEffect(() => {
            pokdet();
            pokcolor();
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id]);
      return {
            audioUrl,
            cardobj,
            typesArray,
            movesArray,
            abilitiesArray,
            color,
            des,
            habitat,
            id,
      };
}
export default usePokDetails;
