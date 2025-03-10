import { useContext, useEffect, useState } from 'react'
import Login1 from "./components/Auth/Login1"
import './App.css'
import EmpolyeeDashboard from './components/Dashboard/EmpolyeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [userData, setUserData] = useContext(AuthContext)
  console.log(userData)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  useEffect(() => {
    const loggedInUser = localStorage.getItem(" loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      console.log("logged hai")
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password)
      if (employee) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
        setUser("employee")
        setLoggedInUserData(employee)
       console.log(employee)
      }
    }
    else {
      alert("Ivalid Credential ")
    }
  }
  
  

  
  return (
    <>
      {!user ? <Login1 handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmpolyeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App
