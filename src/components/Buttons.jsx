import PropTypes from 'prop-types';

function Buttons({ previous, next }) {
  return (
    <div className="flex justify-center items-center gap-10">
      <button onClick={previous} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#101010] shadow-md shadow-gray-700">Prev</button>
      <button onClick={next} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#101010] shadow-md shadow-gray-700">Next</button>
    </div>
  );
}

Buttons.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Buttons;
