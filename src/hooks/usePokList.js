
import { useEffect, useState } from "react";
import axios from "axios";

      const usePokList = (initialPage = 1, limit = 20) => {
            const [currentPage, setCurrentPage] = useState(initialPage);
            const [totalPages, setTotalPages] = useState(0);
            const [previousPage, setPreviousPage] = useState(null);
            const [nextPage, setNextPage] = useState(null);

  const [pokDisplay, setPokDisplay] = useState([]);//state var array to store card of pokemons
  const [isLoading, setIsLoading] = useState(true);//var to check data is loaded or not
  
  async function apiCall() {
      setIsLoading(true);
      const offset = (currentPage - 1) * limit;
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );
        setTotalPages(Math.ceil(response.data.count / limit));
        setPreviousPage(response.data.previous);
        setNextPage(response.data.next);
        const pokemonresult = response.data.results;//array of obj contain pokemon name and url for details of that pokemon
        const resultpromise = pokemonresult.map((index) =>
              axios.get(index.url)
        );//convert array of urls into resolved promises
        const res = await axios.all(resultpromise);
        const arr = res.map((pok) => {
              return {
                    id: pok.data.id,
                    name: pok.data.name,
                    image: pok.data.sprites.other.home.front_default ||
                    pok.data.sprites.front_default,
                    types: pok.data.types,
              };
        });//convert response data into array of object of pokecard
        setPokDisplay(arr);//state var array with above arr
        console.log(arr);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      } finally {
        setIsLoading(false);
      }
  }

  useEffect(() => {
        apiCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, limit]);//useEffect hook to call apicall function when pokeurl is updated

  return {
      isLoading,
      pokDisplay,
      currentPage,
      totalPages,
      previousPage,
      nextPage,
      setCurrentPage,
    };
}
export default usePokList;