import React, { useEffect, useState } from 'react'

const Header = ({data, changeUser}) => {
  console.log(data)
  const [userName,setUserName]=useState("")

  useEffect(()=>{
    if(!data){
      setUserName("Admin")
    }else{
      setUserName(data.firstName)
    }
  })
  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    changeUser('')
  //  window.location.reload()
  }

  return (
    <>
    <div className='flex items-end justify-between'>
     <h1 className='text-2xl font-medium'>hell <br/> <span className='text-3xl font-semibold'>{userName}👋</span></h1>
     <button onClick={logOutUser}className='bg-red-500 text-white px-5 py-2 rounded-2xl text-lg font-medium'> log out</button>
    </div>
    </>
  )
    
}

export default Header
