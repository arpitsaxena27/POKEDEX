/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Pokemon({ name, image }) {
    //return pokemon card
      return (
            <>
                  <div className="flex flex-col items-center hover:bg-red-400 p-10 gap-4">
                        <h1 className="text-2xl">{name.toUpperCase()}</h1>
                        <img className="  w-40 h-40" src={image} alt="" />
                  </div>
            </>
      );
}
export default Pokemon;
