import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext)
  console.log(userData.employees)
  return (
    <div id="tasklist" className='bg-[#1c1c1c] p-5 mt-5 rounded h-60'>

      <div className='bg-red-400 mb-2   py-2 px-4  flex justify-between rounded'>
        <h2 className='w-1/5 text-xl font-medium'>Employee Name</h2>
        <h3 className='w-1/5 text-xl font-medium'>New Task</h3>
        <h5 className='w-1/5 text-xl font-medium'>Active Task</h5>
        <h5 className='w-1/5 text-xl font-medium'>Complete</h5>
        <h5 className='w-1/5 text-xl font-medium'>Failed</h5>
      </div>
      <div className='h-[80%] overflow-y-auto '>
        {userData.map((elem ,idx) => {
          return <div key ={idx}className='  bg-emerald-500 mb-2   py-2 px-4  flex justify-between rounded gap-4'>
            <h2 className=' text-xl font-medium w-1/5   '>{elem.firstName}</h2>
            <h3 className=' text-xl font-medium w-1/5 text-blue-600  '>{elem.taskCounts.newTask} </h3>
            <h5 className=' text-xl font-medium w-1/5 text-yellow-400  '>{elem.taskCounts.active}</h5>
            <h5 className=' text-xl font-medium w-1/5 text-green-600  '>{elem.taskCounts.completed}</h5>
            <h5 className=' text-xl font-medium w-1/5  text-blue-600 '>{elem.taskCounts.failed  }</h5>
          </div>
        })}
      </div>


    </div>
  )
}

export default AllTask
