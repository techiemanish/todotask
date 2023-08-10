import React from "react";
import AddTaskForm from "./AddTaskForm";
import ViewTaskDetails from "./ViewTaskDetails";
import { useDispatch, useSelector } from "react-redux";
import { setDescriptionView, setTaskView } from "../redux/actions";
import AddDescription from "./AddDescription";
import ViewDescription from "./ViewDescription";

function Home() {
  const dispatch = useDispatch();
  const taskView = useSelector(state => state.rootReducer.taskView);
  const descriptionView = useSelector(state => state.rootReducer.taskDescription);
    const addTask = ()=>{
        if(taskView){
          dispatch(setTaskView(false));
        }
        else{
          dispatch(setTaskView(true));
          dispatch(setDescriptionView(false))
        }
    }
  return (
    <>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <div className="order-2 md:order-1 md:w-1/2 md:p-4">
          <button onClick={addTask} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Add Task
          </button>
        </div>
        <ViewTaskDetails/>
      </div>
      {taskView ? <AddTaskForm/> : null}
      {descriptionView ? <AddDescription/> : null}
    </div>
    {descriptionView ? <ViewDescription/> : null}
    </>
  );
}

export default Home;
