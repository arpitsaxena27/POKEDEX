
import { useEffect, useState } from "react";
import axios from "axios";
let p, n;

function usePokList()
{
    const [pokeurl, setPokeUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon"
  );//state var to store link of 20 pokemons
  const [pokDisplay, setPokDisplay] = useState([]);//state var array to store card of pokemons
  const [isLoading, setIsLoading] = useState(true);//var to check data is loaded or not

  function previous() {
        setPokeUrl(p);
  }//prev button function to set pokeurl with list of prev 20 pokemons
  function next() {
        setPokeUrl(n);
  }//next button function to set pokeurl with list of next 20 pokemons

  async function apiCall() {
        setIsLoading(true);
        const response = await axios.get(pokeurl);//get response from api
        console.log(response);
        p = response.data.previous;//get prev 20 pokemons link
        n = response.data.next;//get next 20 pokemons link
        const pokemonresult = response.data.results;//array of obj contain pokemon name and url for details of that pokemon
        const resultpromise = pokemonresult.map((index) =>
              axios.get(index.url)
        );//convert array of urls into resolved promises
        const res = await axios.all(resultpromise);
        const arr = res.map((pok) => {
              return {
                    id: pok.data.id,
                    name: pok.data.name,
                    image: pok.data.sprites.other.dream_world.front_default,
                    types: pok.data.types,
              };
        });//convert response data into array of object of pokecard
        setPokDisplay(arr);//state var array with above arr
        console.log(arr);
        console.log(pokeurl)
        setIsLoading(false);
  }

  useEffect(() => {
        apiCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeurl]);//useEffect hook to call apicall function when pokeurl is updated

  return {isLoading,pokDisplay,previous,next}
}
export default usePokList;