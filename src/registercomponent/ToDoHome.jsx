import React, { useState,useEffect } from 'react'
import {Link} from "react-router-dom"
import axiosInstance from '../helper/axiosInstance'

const FetchTask = () => {
    let [task,setTask]=useState([])
    useEffect(()=>{
        let fetchData=async ()=>{
         let {data}=await axiosInstance.get("/posts")
         setTask(data)
        }
        fetchData()
   },[])
   let handleDelete=(id)=>{
    axiosInstance.delete(`/posts/${id}`)
    window.location.assign("/fetch")
   }
   
  return (
    <>
    <div className='container'>
      {task.map((x)=>{
        return (
            <div className='carts'>
                <img src={`https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${x.taskname}`} alt='{x.taskname}'/>
                <h3>Task Name : {x.taskname}</h3>
              <h3>Task Description : {x.taskdescription}</h3>
              <div className='btn-block'>
                
                <button>
                    <Link to={`/edit/${x.id}`} id='edit-task' >Edit</Link>
                </button>
                <button   onClick={()=>{
                  handleDelete(x.id)
                }}>Delete</button>
              </div>
               
            </div>

        )
      })}
    </div>
      <button className='addBtn'><Link to={'/add'} id='add-task'>AddTask</Link></button>
    </>
  )
}

export default FetchTask
