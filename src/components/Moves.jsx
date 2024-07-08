/* eslint-disable react/prop-types */
import { useState } from "react";
function Moves({ array }) {
      const [expanded, setExpanded] = useState(false);

      const toggleExpand = () => {
            setExpanded(!expanded);
      };
      return (
            <>
                  <div className="flex flex-col justify-center items-center border-8 border-slate-600">
                        <div className="flex flex-col overflow-hidden gap-5 items-center justify-center p-5  rounded-lg">
                              <h1 className="text-2xl font-extrabold">MOVES</h1>
                              <div
                                    className={`flex ${
                                          expanded ? "h-full" : "h-28"
                                    } flex-wrap justify-evenly gap-x-16 gap-y-10`}
                              >
                                    {array.map((item, index) => (
                                          <p
                                                className="bg-slate-600 rounded-lg py-1 px-5 text-slate-400"
                                                key={index}
                                          >
                                                {item.move.name}
                                          </p>
                                    ))}
                              </div>
                        </div>
                        <button
                              className="mt-4 mb-4 px-4 py-2 bg-blue-700 text-white rounded"
                              onClick={toggleExpand}
                        >
                              {expanded ? "Collapse" : "Expand"}
                        </button>
                  </div>
            </>
      );
}
export default Moves;
