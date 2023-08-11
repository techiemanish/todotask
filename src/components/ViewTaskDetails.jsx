import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDescriptionView } from '../redux/actions';
import { setTaskView } from "../redux/actions";
import { toast } from 'react-hot-toast';

function ViewTaskDetails() {
  let data = localStorage.getItem("myDB");
  let parsedData = JSON.parse(data);
  const dispatch = useDispatch();
  const descriptionView = useSelector(state => state.rootReducer.taskDescription);

  const handleClick = (key, value) => () => {
    dispatch(setDescriptionView(true, key, value));
    if (!descriptionView) {
      dispatch(setDescriptionView(true, key, value));
      dispatch(setTaskView(false));
    }
  };

  const handleDelete = (key) => (event) => {
    event.stopPropagation();
    const confirmation = window.confirm("Are you sure you want to delete this task?");

    if (confirmation) {
      delete parsedData[key];
      localStorage.setItem("myDB", JSON.stringify(parsedData));
      toast.success("Successfully removed!");
      setTimeout(() => { window.location.reload() }, 500);
    }

  };

  if (parsedData !== null) {
    return (
      <div className="max-w-screen-sm mt-2">
        {Object.keys(parsedData).map((key, index) => (
          <div
            key={index}
            onClick={handleClick(key, parsedData[key])}
            className="bg-yellow-300 p-3 mb-5 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 flex cursor-pointer relative" // Added "relative" class for positioning
          >
            <div className="ml-4">
              <h2 className="text-sm font-semibold mb-2">{key.split("_").join(" ")}</h2>
            </div>
            <button
              onClick={handleDelete(key)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded absolute right-2 top-2" // Added delete button styling
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default ViewTaskDetails;
