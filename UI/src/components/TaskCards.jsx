import { useState } from 'react'
import { useEffect} from 'react'

import React from 'react'
import TaskCard from '../components/TaskCard'

const TaskCards = () => {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
  
        const fetchtask = async () => {
            try {
                const res = await fetch('/api/tasks');
                const data = await res.json()
                setTask(data)
            } catch (error) {
                console.log('error', error)
            }
        };
        fetchtask()
    }, [])

 
    
    return (
        <>
            
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
                {tasks.map(task => (
                    <TaskCard key={task._id} task={task}/>
            ))
                }
        </div>
        </>
    )
}


export default TaskCards