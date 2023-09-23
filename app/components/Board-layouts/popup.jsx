import React, { useState } from 'react'

export default function Popup() {
  const [Task, setaddTask] = useState([]);
  console.log(Task)
  const handleAddTask = () => {
    
    const newTask = <div key={Task.length}>{Task}</div>;
    setaddTask([...Task, newTask]);
  };
  
  return (
    <div>
      {Task}
      <div className=" px-5 py-1">
        <input type="text" placeholder='Enter Task ' className='outline-none p-2 rounded-lg ring-2 ' />
      </div>
      <button className='mx-5 my-4 px-2 py-1 bg-blue-500 rounded-md text-white' onClick={handleAddTask}>Add Task</button>
    </div>
  )
}
