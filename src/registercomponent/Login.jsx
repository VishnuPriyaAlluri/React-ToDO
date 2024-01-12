import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Login = () => {
    let navigate=useNavigate()
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let handleLogin=(e)=>{
        e.preventDefault()
        let dbuser=window.localStorage.getItem("email")
        let dbpass=window.localStorage.getItem("password")
        if(dbuser===email && dbpass===password){
           toast.success(`${email} is logged in succuss`)
            navigate("/fetch")
        }else{
           toast.error(`Invalid email or password`)
        }
    }
  return (
   <div className='loginpage'>
    <ToastContainer/>
    <form action="">
        <fieldset style={{textAlign:'center', padding:"20px"}}><br/>
            <h1>Login</h1> <br /><br />
            <label htmlFor="email">Email :</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} /><br /><br />
            <label htmlFor="password">Password :</label>
            <input type="pass"  onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
           <div className='login-button'> <button onClick={handleLogin}>Login</button>   
            <button type='reset'>Cancel</button><br/><br/>
            </div>
            <button ><Link to={'/signup'} id='linktag'>ClickHereToCreateAccount</Link></button>
           


        </fieldset>
    </form>
   </div>
  )
}

export default Login
