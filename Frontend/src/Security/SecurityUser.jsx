import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const SecurityUser = () => {
    const auth = localStorage.getItem('isLoggedIn') 
    console.log(auth)
    const loggedUser = JSON.parse(localStorage.getItem('user'))  
    console.log(loggedUser)

    console.log(auth)
    return  auth && loggedUser.role === 'user' && loggedUser.role !== null  ? <Outlet/> : <Navigate to={'/login'}/> 
}

export default SecurityUser