/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { Link } from "react-router-dom";
import "../css/3dcard.css"; // Import the CSS file

function Pokemon({ name, image, id, isBookmarked, toggleBookmark }) {
      return (
            <div className="card lg:w-72 lg:h-48 md:w-72 md:h-48 w-36 h-36 flex justify-center items-center">
                  <div className="card-inner relative w-full h-full">
                        <div className="card-front absolute w-full h-full bg-[#101010] flex items-center justify-center rounded-lg shadow-md shadow-gray-700">
                              <img
                                    className="lg:w-40 lg:h-40 md:w-40 md:h-40 w-28 h-28"
                                    src={image}
                                    alt={name}
                              />
                        </div>
                        <div className="card-back absolute w-full h-full bg-[#101010] flex items-center justify-center rounded-lg text-white shadow-md shadow-gray-700">
                              <Link to={`/pokemon/${id}`}>
                                    <h1 className="h-80 flex justify-center items-center text-[13px] md:text-2xl lg:text-4xl mb-4 ">
                                          {name.toUpperCase()}
                                    </h1>
                              </Link>
                              <button
                                    onClick={toggleBookmark}
                                    className="bookmark-button absolute top-1 md:top-5 lg:top-5"
                              >
                                    {!isBookmarked ? (
                                          <span className="material-symbols-outlined">
                                          star
                                          </span>
                                    ) : (
                                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                                    )}
                              </button>
                        </div>
                  </div>
            </div>
      );
}

export default Pokemon;
