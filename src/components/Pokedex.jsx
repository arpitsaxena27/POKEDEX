import Pokemonlist from "./Pokemonlist";
import Search from "./Search";

function Pokedex() {
      return (
            <div className="py-20">
                  <h2 className="flex items-center justify-center text-6xl text-white">
                        POKEDEX
                  </h2>
                  <Search></Search>
                  <Pokemonlist></Pokemonlist>
            </div>
      );
}
export default Pokedex;
