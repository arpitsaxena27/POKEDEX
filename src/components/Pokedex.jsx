import Pokemonlist from "./Pokemonlist";
import Search from "./Search";

function Pokedex() {
      return (
            <>
                  <h2 className=" flex items-center justify-center text-6xl text-red-700">
                        POKEDEX
                  </h2>
                  <Search></Search>
                  <Pokemonlist></Pokemonlist>
            </>
      );
}
export default Pokedex;
