import PropTypes from 'prop-types';

function Buttons({ previous, next }) {
  return (
    <div className="flex justify-center items-center gap-10">
      <button onClick={previous} className="px-3 py-1 bg-slate-200 text-2xl border-2 border-slate-700 rounded-md">Prev</button>
      <button onClick={next} className="px-3 py-1 bg-slate-200 text-2xl border-2 border-slate-700 rounded-md">Next</button>
    </div>
  );
}

Buttons.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Buttons;
