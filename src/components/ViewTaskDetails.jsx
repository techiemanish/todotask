import React from 'react';
import AddDescription from './AddDescription';

function ViewTaskDetails() {
  let data = localStorage.getItem("myDB");
  let parsedData = JSON.parse(data);

  const handleClick = (key, value) => () => {
    console.log("Key:", key);
    console.log("Value:", value);
    <AddDescription key ={key} value ={value}/>
  }

  if (parsedData !== null) {
    return (
      <div>
        {Object.keys(parsedData).map((key, index) => (
          <div
            key={index}
            onClick={handleClick(key, parsedData[key])}
            className="bg-white p-2 mb-5 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 flex cursor-pointer"
          >
            <div className="flex-shrink-0 bg-blue-500 text-white rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-semibold mb-2">{key.split("_").join(" ")}</h2>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default ViewTaskDetails;
