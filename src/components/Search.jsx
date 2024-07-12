import { useNavigate } from "react-router-dom";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";

function Search() {
      const navigate = useNavigate();
      const debounceCallBack = useDebounce(searchone);
      async function searchone(event) {
            const pokemonName = event.target.value.toLowerCase().trim();
            if (!pokemonName) return;

            try {
                  const response = await axios.get(
                        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
                  );
                  if (response.data) {
                        navigate(`/pokemon/${pokemonName}`);
                  }
            } catch (error) {
                  console.log("Pokemon does not exist");
            }
      }

      return (
            <div className="flex justify-center items-center mt-6">
                  <input
                        type="text"
                        className="border-2 py-0 md:py-3 lg:py-3 h-8 px-3 border-black rounded-md input input-bordered w-56 md:w-full lg:w-full max-w-xs"
                        placeholder="Enter pokemon name"
                        onChange={debounceCallBack}
                        name="search"
                        id="search"
                  />
                  <span className=" material-symbols-outlined ml-[-30px]">
                        search
                  </span>
            </div>
      );
}

export default Search;
