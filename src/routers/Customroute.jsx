import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/Pokedex";
import Pokemondetails from "../components/Pokemondetails";
function Customroute() {
      return (
            <>
                  <Routes>
                        <Route path="/" element={<Pokedex></Pokedex>}></Route>
                        <Route
                              path="/pokemon/:id"
                              element={<Pokemondetails></Pokemondetails>}
                        ></Route>
                  </Routes>
            </>
      );
}
export default Customroute;
