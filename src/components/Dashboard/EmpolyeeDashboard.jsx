import React from 'react'
import Header from '../../Other/Header'
import TaskListNumbers from '../../Other/TaskListNumbers'
import TaskList from '../../Tasklist/TaskList'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const EmpolyeeDashboard = ({data, changeUser}) => {
  
    return (
      
        <>
           
            <div className='p-10 bg-[#1c1c1c] h-screen'>
               
               <Header  data ={data}  changeUser={changeUser}/>
               <TaskListNumbers data ={data} />
               <TaskList  data ={data}/>
            </div>
        </>
    )
}

export default EmpolyeeDashboard
