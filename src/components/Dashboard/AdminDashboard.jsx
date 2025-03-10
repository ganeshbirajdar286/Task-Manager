import React from 'react'
import Header from '../../Other/Header'
import CreateTask from '../../Other/CreateTask'
import AllTask from './AllTask'

const AdminDashboard = ({data, changeUser}) => {
  return (
    <>
    <div className='h-screen w-full p-10  '>
      <Header data={data}  changeUser={changeUser}/>
      <CreateTask data={data}/>
      <AllTask data={data}/>
    </div>
    </>
    
  )
}

export default AdminDashboard
