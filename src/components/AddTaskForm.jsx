import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const AddTaskForm = () => {
  const [task, setTask] = useState('');

const handleTaskChange = (event) => {
  setTask(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  // console.log('Task:', task);
  if(localStorage.getItem("myDB") === null){
    let attr = task.replace(/ /g, '_');
    let obj = {}
    obj[attr] = []; 
    localStorage.setItem("myDB",JSON.stringify(obj));
    toast.success("Task added Successfully!")
  }
  else{
    let attr = task.replace(/ /g, '_');
    let data = localStorage.getItem("myDB");
    let parsedData = JSON.parse(data);
    let flag = false;
    for(let i in parsedData){
      if(i.toLowerCase() === attr.toLowerCase()){
        flag = true;
      }
    }
    if(flag === true){
      toast.error("Task already exist!")
    }else{
      parsedData[attr] = [];
      localStorage.setItem("myDB",JSON.stringify(parsedData));
      toast.success("Task added Successfully!")
    }
  }
  setTask('');
  window.location.reload();
};

return (
  <div className="w-full md:w-1/2 p-4">
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task">
            Task
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="task"
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={handleTaskChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  </div>
);
}
export default AddTaskForm;
