import { Link } from "react-router-dom";
import "../css/3dcard.css"; // Import the CSS file

function Bookpokemon({ name, image, id, isBookmarked, toggleBookmark }) {
    return (
          <div className=" h-28 flex justify-evenly items-center bg-black w-full rounded-lg">
                
                            <Link to={`/pokemon/${id}`}>
                                  <h1 className="flex justify-center items-center text-xs md:text-lg lg:text-lg font-extrabold">
                                        {name.toUpperCase()}
                                  </h1>
                            </Link>
                            <button
                                  onClick={toggleBookmark}
                                  className=""
                            >
                                  {!isBookmarked ? (
                                        <span className="material-symbols-outlined">
                                        star
                                        </span>
                                  ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                                  )}
                            </button>
                            <img
                                    className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20"
                                    src={image}
                                    alt={name}
                              />
          </div>
    );
}
export default Bookpokemon