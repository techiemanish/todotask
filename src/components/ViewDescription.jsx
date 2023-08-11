import React from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function ViewDescription() {
  let dBdata = localStorage.getItem("myDB");
  let parsedData = JSON.parse(dBdata);
  const descriptionState = useSelector(state => state.rootReducer);
  const { descriptionKey } = descriptionState;
  const data = parsedData[descriptionKey];

  const handleDelete = (index) => {
    const confirmation = window.confirm("Are you sure you want to delete this description?");

    if (confirmation) {
      data.splice(index, 1); // to delete it from the DB array
      localStorage.setItem("myDB", JSON.stringify(parsedData));
      toast.success("Successfully removed!");
      setTimeout(() => { window.location.reload() }, 500);
    }
  };

  return (
    <>
      <hr />
      <div className="flex flex-wrap justify-start p-2 sm:p-4">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-300 p-2 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-2">
              {item}
              <div className="flex justify-end mt-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewDescription;
