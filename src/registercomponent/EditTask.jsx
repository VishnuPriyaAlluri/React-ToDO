import React, { useEffect, useState } from 'react'
import axiosInstance from '../helper/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import {Link} from "react-router-dom"
const EditTask = () => {

    let {id}=useParams()
    let navigate=useNavigate()
    let [taskname,setTaskname]=useState()
    let [taskdescription,setTaskdescription]=useState()

    useEffect(()=>{
        let fetchData=async ()=>{
            let {data}=await axiosInstance.get(`/posts/${id}`)
            setTaskname(data.taskname)
            setTaskdescription(data.taskdescription)
        }
        fetchData()
    },[])

    let handleSubmit=(e)=>{
        let payload={
          taskname,taskdescription
        }
        axiosInstance.put(`/posts/${id}`,payload)
        
        navigate("/fetch")
  }

  return (
    <>
    <div>
      <form>
        <fieldset style={{textAlign:'center'}}>
            <legend>Edit Task</legend>
            <label htmlFor="">TaskName</label>
            <input type="text" value={taskname} onChange={(e)=>{setTaskname(e.target.value)}}/><br /><br />
            <label htmlFor="">Task Description</label>
            <input type="text" value={taskdescription} onChange={(e)=>{setTaskdescription(e.target.value)}} /><br /><br />
            <button onClick={handleSubmit}>Update</button><br /><br/>
            <button type='reset'>Cancel</button><br/><br/>
            <button><Link to={`/fetch`}>Back</Link></button>
            
        </fieldset>
      </form>
    </div>
      <div className='dummydiv'></div>
    </>
  )
}

export default EditTask
