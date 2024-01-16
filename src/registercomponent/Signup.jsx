import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
const Signup = () => {
    let navigate =useNavigate()
    let [firstname,setFirstname]=useState("")
    let [lastname,setLastname]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [dob,setDob]=useState("")

    let handleSignup=(e)=>{
          e.preventDefault()
          window.localStorage.setItem("firstname",firstname)
          window.localStorage.setItem("lastname",lastname)
          window.localStorage.setItem("email",email)
          window.localStorage.setItem("password",password)
          window.localStorage.setItem("dob",dob)
          toast.success("Signup Successful")
          navigate("/")
    }
  return (
    <>
    <div className='signuppage'>
      <form action="">
        <fieldset style={{textAlign:'center' , padding:"20px"}}>
            <h1>Signup</h1><br/><br/>
            <label htmlFor="">First Name:</label>
            <input type="text" onChange={(e)=>{setFirstname(e.target.value)}}/><br /><br />
            <label htmlFor="">Last Name :</label>
            <input type="text" onChange={(e)=>{setLastname(e.target.value)}}/><br /><br/>
            <label htmlFor="">Email :</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} /><br /><br />
            <label htmlFor="">Password :</label>
            <input type="pass" onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
            <label htmlFor="">DOB</label>
            <input type="date" onChange={(e)=>{setDob(e.target.value)}}/><br /><br />
            <div className='signup-button'><button onClick={handleSignup}>Signup</button><br/><br/>
            <button type='reset'>Cancel</button></div>


        </fieldset>
      </form>
    </div>
      <div className='dummydiv'></div>
    </>
  )
}

export default Signup
