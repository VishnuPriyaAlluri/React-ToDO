import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosInstance from './../helper/axiosInstance';
import {Link} from 'react-router-dom'

const Home = () => {
    let navigate=useNavigate()
    let [taskname,setTaskname]=useState()
    let [taskdescription,setTaskdescription]=useState()

    let addTask=(e)=>{
        let payload={
            taskname,taskdescription
        }
        axiosInstance.post("/posts",payload)
           toast.success(`${taskname} is added success`)
           navigate("/fetch")
    }
  return (
    <div className='homepage'>
      <form>
        <fieldset style={{textAlign:'center', padding:"20px"}}>
            <h1>ToDo Home</h1><br/><br/>
            <label htmlFor="">TaskName :</label>
            <input type="text"  onChange={(e)=>{setTaskname(e.target.value)}}/><br /><br />
            <label htmlFor="">Task Description :</label>
            <input type="text" onChange={(e)=>{setTaskdescription(e.target.value)}} /><br /><br />
            <div className='add-task-button'><button onClick={addTask}>Add</button>
            <button type='reset'>Cancel</button></div><br/>
            <button><Link to={`/fetch`} id='linktag'>Back</Link></button>

        </fieldset>
      </form>

    </div>
  )
}

export default Home
