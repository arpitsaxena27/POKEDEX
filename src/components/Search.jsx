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
                        className="w-1/2 border-2 px-3 py-1 border-black rounded-md input input-bordered w-full max-w-xs"
                        placeholder="enter pokemon name"
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
