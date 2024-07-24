import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const TaskCard = ({ task }) => {
  console.log(task)
  return (
    <>
    
      <div className=' bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
        <h2 className=' font-bold text-lg text-purple-900 '>    {task.taskId}</h2>
        <p className='text-black group-hover:text-white my-2 mx-5'>{task.title} </p>
        <p className='text-black group-hover:text-white my-2 mx-5'>{task.assignedto} </p>
        <p className='text-black group-hover:text-white my-2 mx-5'>{task.description} </p>
        <p className='text-black group-hover:text-white my-2 mx-5'>{task.status} </p>
        {/* <a href="/tasks/view" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5">View details</a> */}
        <Link to={`/tasks/${task.taskId}`} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5">View details</Link>
      </div>
    </>
  )
}
export default TaskCard



































