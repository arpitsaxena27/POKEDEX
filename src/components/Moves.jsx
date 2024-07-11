/* eslint-disable react/prop-types */
import { useState } from "react";
function Moves({ array,color }) {
      const [expanded, setExpanded] = useState(false);

      const toggleExpand = () => {
            setExpanded(!expanded);
      };
      return (
            <>
                  <div className={`flex flex-col justify-center items-center rounded-lg ${color}border`}>
                        <div className="flex flex-col overflow-hidden gap-5 items-center justify-center p-5  rounded-lg">
                              <h1 className="text-2xl font-extrabold">MOVES</h1>
                              <div
                                    className={`${
                                          expanded ? "h-full" : "h-32"
                                    } flex flex-wrap justify-center items-center`}
                              >
                                    {array.length ? (
                                          array.map((item, index) => (
                                                <p
                                                      className={`${color} text-[15px] md:text-xl lg:text-2xl m-1 w-full md:w-[48%] lg:w-[48%] rounded-lg py-1 px-5`}
                                                      key={index}
                                                >
                                                      {item.move.name}
                                                </p>
                                          ))
                                    ) : (
                                          <p>
                                                no moves are present in database
                                          </p>
                                    )}
                              </div>
                        </div>
                        <button
                              className={`mt-4 flex justify-center items-center mb-4 ${color} text-white rounded-full`}
                              onClick={toggleExpand}
                        >
                              {expanded ? (
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="48px"
                                          viewBox="0 -960 960 960"
                                          width="48px"
                                          fill="#e8eaed"
                                    >
                                          <path d="m280-400 200-201 200 201H280Z" />
                                    </svg>
                              ) : (
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="48px"
                                          viewBox="0 -960 960 960"
                                          width="48px"
                                          fill="#e8eaed"
                                    >
                                          <path d="M480-360 280-559h400L480-360Z" />
                                    </svg>
                              )}
                        </button>
                  </div>
            </>
      );
}
export default Moves;
