/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import {Link} from 'react-router-dom'

function Pokemon({ name, image,id }) {
      //return pokemon card
      return (
            <>
                  <div className="flex flex-col items-center hover:bg-red-400 p-10 gap-4">
                        <Link to={`/pokemon/${id}`}>
                              <h1 className="text-2xl">{name.toUpperCase()}</h1>
                              <img className="  w-40 h-40" src={image} alt="" />
                        </Link>
                  </div>
            </>
      );
}
export default Pokemon;
