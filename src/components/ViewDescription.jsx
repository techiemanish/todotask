import React from 'react';
import { useSelector } from 'react-redux';

function ViewDescription() {
  let dBdata = localStorage.getItem("myDB");
  let parsedData = JSON.parse(dBdata);
  const descriptionState = useSelector(state => state.rootReducer);
  const { descriptionKey } = descriptionState;
  const data = parsedData[descriptionKey];

  return (
    <>
    <hr/>
    <div className="flex flex-wrap justify-start p-5 sm:p-8">
      {data.map((item, index) => (
        <div key={index} className="bg-gray-300 p-5 m-4 w-full md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-4">
            {item}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default ViewDescription;
