import React, { useState } from "react";
import { SiTodoist } from "react-icons/si";

function Card() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e)=>{
      e.preventDefault()
      setMainTask([...mainTask, {task, desc}])
      setTask("")
      setDesc("")
}

let deleteHander = (i)=>{
   let copyTask = [...mainTask]
   copyTask.splice(i, 1)
   setMainTask(copyTask)
}
let renderTask = <h2 className="font-semibold text-center text-xl">No Task Available!</h2>

if(mainTask.length>0){
   renderTask = mainTask.map((t, i)=>{
      return( 
         <li key={i} className="flex items-center justify-between px-10 mb-8">
            <div className="flex justify-between w-2/3">
               <h5 className="text-2xl font-semibold">{t.task}</h5>
               <h6 className="text-xl items-center">{t.desc}</h6>
            </div>
            <button 
               onClick={()=>{
                  deleteHander(i)
               }
            }
            className="px-4 py-3 bg-red-600 text-white rounded ">Delete</button>
         </li>
      )
   })   
}

  return (
    <div>
      <h1 className="text-3xl bg-black flex item-center justify-center text-white gap-5 p-7 font-bold">
        <SiTodoist /> TO-DO LIST
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-xl border-zinc-700 border-2 m-8 px-4 py-2 rounded"
          placeholder="Enter today's task!"
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
         }}
        />
        <input
          type="text"
          className="text-xl border-zinc-700 border-2 m-8 px-4 py-2 rounded"
          placeholder="Enter task description"
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }}
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md m-5">
          Add Task
        </button>
      </form>
      <div className="p-8 bg-slate-300">
         <ul>
         {renderTask}
         </ul>
      </div>
      <hr />
    </div>
  );
}

export default Card;
