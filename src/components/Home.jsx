import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import ViewTaskDetails from "./ViewTaskDetails";

function Home() {
    const [view, setview] = useState(false);
    const addTask = ()=>{
        if(view === false){
            setview(true);
        }
        else{
            setview(false)
        }
    }
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <div className="order-2 md:order-1 md:w-1/2 md:p-4">
          <button onClick={addTask} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add Task
          </button>
        </div>
        <ViewTaskDetails/>
      </div>
      {view ? <AddTaskForm/> : null}
    </div>
  );
}

export default Home;
