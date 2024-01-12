import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from "./registercomponent/Login"
import Signup from "./registercomponent/Signup"
import Add from "./registercomponent/AddTask"
import FetchTask from './registercomponent/ToDoHome'
import EditTask from './registercomponent/EditTask'
import Nav from "./registercomponent/Nav"
import "./global.css"
const App = () => {
  return (
    <Router>
          <Nav/>
           
            <Routes>
                 <Route path='/' element={<Login/>}/>
                 <Route path='/signup' element={<Signup/>}/>
                 <Route path='/add' element={<Add/>}/>
                 <Route path='/fetch' element={<FetchTask/>}/>
                 <Route path='/edit/:id' element={<EditTask/>}/>
                 
            </Routes>
        </Router>
  )
}

export default App
