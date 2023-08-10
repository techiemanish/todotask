import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function AddDescription(props) {
    const descriptionState = useSelector(state=>state.rootReducer);
    const {descriptionKey} = descriptionState;
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let data = localStorage.getItem("myDB");
      let parsedData=JSON.parse(data);
      let arr = parsedData[descriptionKey];
      arr.push(description);
      localStorage.setItem("myDB",JSON.stringify(parsedData));
      toast.success("Description added. Successfully!")
      setDescription('');
    };
  
    return (
      <div className="w-full md:w-1/2 p-4">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-yellow-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              {descriptionKey.split("_").join(" ")}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Description
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  };

export default AddDescription