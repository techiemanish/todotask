import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDescriptionView } from '../redux/actions';
import { setTaskView } from "../redux/actions";

function ViewTaskDetails() {
  let data = localStorage.getItem("myDB");
  let parsedData = JSON.parse(data);
  const dispatch = useDispatch();
  const descriptionView = useSelector(state => state.rootReducer.taskDescription);

  const handleClick = (key, value) => () => {
    dispatch(setDescriptionView(true,key,value));
    if(!descriptionView){
      dispatch(setDescriptionView(true,key,value));
      dispatch(setTaskView(false));
    }
  }

  if (parsedData !== null) {
    return (
      <div className="max-w-screen-sm mt-2"> {/* Added max-w-screen-sm class */}
        {Object.keys(parsedData).map((key, index) => (
          <div
            key={index}
            onClick={handleClick(key, parsedData[key])}
            className="bg-yellow-300 p-3 mb-5 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 flex cursor-pointer"
          >
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
