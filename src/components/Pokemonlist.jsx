import Pokemon from "./Pokemon";
import Buttons from "./Buttons";
import usePokList from "../hooks/usePokList";

function Pokemonlist() {
      const { isLoading, pokDisplay, previous, next } = usePokList();

      return (
            <>
                  <div className="flex flex-wrap justify-center items-center gap-10 m-5">
                        {isLoading
                              ? "Loading..."
                              : pokDisplay.map((index) => (
                                      <Pokemon
                                            name={index.name}
                                            image={index.image}
                                            key={index.id}
                                            id={index.id}
                                      ></Pokemon>
                                ))}
                  </div>
                  <Buttons previous={previous} next={next}></Buttons>
            </>
      ); //convert pokDisplay arr of objects into cards
}

export default Pokemonlist;
