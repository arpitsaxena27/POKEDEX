import Pokemonlist from "./Pokemonlist";
import Search from "./Search";

function Pokedex() {
      return (
            <>
                  <h2 className="flex items-center justify-center text-6xl text-white">
                        POKEDEX
                  </h2>
                  <Search></Search>
                  <Pokemonlist></Pokemonlist>
            </>
      );
}
export default Pokedex;
