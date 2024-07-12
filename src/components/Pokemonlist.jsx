import Pokemon from "./Pokemon";
import Buttons from "./Buttons";

import BookmarkList from "./BookmarkList";
import useBookmark from "../hooks/useBookmark";

function Pokemonlist() {
      const {
            isLoading,
            pokDisplay,
            bookmarks,
            toggleBookmark,
            currentPage,
            totalPages,
            setCurrentPage,
      } = useBookmark();

      return (
            <div className="drawer">
                  <input
                        id="my-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                  />
                  <div className="drawer-content">
                        <div className="flex flex-wrap justify-center items-center gap-10 m-5">
                              {isLoading ? (
                                    <span className="loading loading-spinner loading-lg"></span>
                              ) : (
                                    pokDisplay.map((pokemon) => (
                                          <Pokemon
                                                name={pokemon.name}
                                                image={pokemon.image}
                                                key={pokemon.id}
                                                id={pokemon.id}
                                                isBookmarked={bookmarks.some(
                                                      (bookmark) =>
                                                            bookmark.id ===
                                                            pokemon.id
                                                )}
                                                toggleBookmark={() =>
                                                      toggleBookmark(pokemon)
                                                }
                                          />
                                    ))
                              )}
                        </div>
                        <Buttons
                              currentPage={currentPage}
                              totalPages={totalPages}
                              setCurrentPage={setCurrentPage}
                        ></Buttons>
                        <label
                              htmlFor="my-drawer"
                              className="absolute top-[-165px] left-5 md:top-[-95px] md:left-20 lg:top-[-95px] lg:left-20"
                        >
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="35px"
                                    viewBox="0 -960 960 960"
                                    width="35px"
                                    fill="#e8eaed"
                              >
                                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                              </svg>
                        </label>
                  </div>
                  <div className="drawer-side">
                        <label
                              htmlFor="my-drawer"
                              aria-label="close sidebar"
                              className="drawer-overlay"
                        ></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-96">
                              <BookmarkList
                                    bookmarks={bookmarks}
                                    toggleBookmark={toggleBookmark}
                              />
                        </ul>
                  </div>
            </div>
      );
}

export default Pokemonlist;
