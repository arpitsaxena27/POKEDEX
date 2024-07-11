/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { Link } from 'react-router-dom';
import '../css/3dcard.css'; // Import the CSS file

function Pokemon({ name, image, id }) {
  return (
    <div className="card lg:w-72 lg:h-48 md:w-72 md:h-48 w-28 h-28 flex justify-center items-center">
      <div className="card-inner relative w-full h-full">
        <div className="card-front  absolute w-full h-full bg-[#101010] flex items-center justify-center rounded-lg shadow-md shadow-gray-700">
            <img className="lg:w-40 lg:h-40 md:w-40 md:h-40 w-24 h-24" src={image} alt={name} />
        </div>
        <div className="card-back absolute w-full h-full bg-[#101010] flex items-center justify-center rounded-lg text-white shadow-md shadow-gray-700">
          <Link to={`/pokemon/${id}`}>
            <h1 className="h-80 flex justify-center items-center text-[13px] md:text-2xl lg:text-4xl mb-4 ">{name.toUpperCase()}</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
