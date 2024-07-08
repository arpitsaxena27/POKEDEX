/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { Link } from 'react-router-dom';
import '../css/3dcard.css'; // Import the CSS file

function Pokemon({ name, image, id }) {
  return (
    <div className="card w-72 h-48">
      <div className="card-inner relative w-full h-full">
        <div className="card-front  absolute w-full h-full bg-[#101010] flex items-center justify-center rounded-lg shadow-md shadow-gray-700">
            <img className="w-40 h-40" src={image} alt={name} />
        </div>
        <div className="card-back absolute w-full h-full bg-[#101010] flex items-center justify-center rounded-lg text-white shadow-md shadow-gray-700">
          <Link to={`/pokemon/${id}`}>
            <h1 className="h-80 flex justify-center items-center text-4xl mb-4 ">{name.toUpperCase()}</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
