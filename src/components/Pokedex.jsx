import Pokemonlist from "./Pokemonlist";
import Search from "./Search";

function Pokedex() {
      return (
            <div className="py-20">
                  <h2 className="flex items-center justify-center text-6xl text-white">
                  P<img className="w-12 h-12" src="../../pokeball.png" alt="" />KEDEX
                  </h2>
                  <Search></Search>
                  <Pokemonlist></Pokemonlist>
            </div>
      );
}
export default Pokedex;
