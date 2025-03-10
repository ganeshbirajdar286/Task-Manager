import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data,task}) {
    return (
        <div id="tasklist" className=' flex items-center justify-start gap-5 flex-nowrap h-[55%] overflow-x-auto w-full py-5  mt-10 '>
          {data.tasks.map((elem ,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem} task={task}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem} task={task}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem} task={task}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem} task={task} />
            }
          })}
          
            
        </div>
    )
}

export default TaskList
