import Bookpokemon from './Bookpokemon';

function BookmarkList({ bookmarks, toggleBookmark }) {
    return (
        <div>
            <h2 className='text-3xl text-center m-5 font-bold'>Favourite Pokemons</h2>
            <div className="flex flex-wrap justify-center items-center gap-10 m-2 md:m-5 lg:m-5">
                {bookmarks.length === 0 ? (
                    <p>You did not mark any pokemon as Favourite...</p>
                ) : (
                    bookmarks.map((pokemon) => (
                        <Bookpokemon
                            name={pokemon.name}
                            image={pokemon.image}
                            key={pokemon.id}
                            id={pokemon.id}
                            isBookmarked={true}
                            toggleBookmark={() => toggleBookmark(pokemon)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default BookmarkList;
