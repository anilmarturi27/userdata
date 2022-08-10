import { useState } from "react"
import React from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { store } from './App';
import { Navigate } from "react-router-dom";



const Login = () => {
    const [token,setToken] = useContext(store)
    const [data,setdata] = useState(
        {
          username :'',
          email :'',
          phno :''
        }
      )
      const [anil,setanil]=useState(false)
      const {username,email,phno} = data
      const onch = e =>
      {
        setdata({...data,[e.target.name]:e.target.value})
        setanil(false)
      }
      const subh = e =>
      {
        e.preventDefault()
        setToken({name:username,tok:true})
        // axios.get()
         axios.post('http://localhost:5000/login',data).then(
         res => {
            if(res.data === "login succesful"){
                setToken({name:username,tok:true})
            }
            else{
                
                setanil(true)
                setdata({
                    username :'',
                    email :'',
                    phno :''
                  })
            }
            
            
         }
        
         
     ).catch((err)=>{
        console.log(err)
        console.log(token)
     })
     
        
   
    }
    if(token.tok)
    return <Navigate to='/home' />
  return (
    <div>
        <center>
            <h2>
                LOGIN HERE
            </h2>
        <form onSubmit={subh}>
        <input type="text" name="username" placeholder='username' value={username} onChange={onch}/><br/><br/>
        <input type="email" name="email" placeholder='email' value={email} onChange={onch}/><br/><br/>
        <input type="text" name="phno" placeholder='phone no' value={phno} onChange={onch}/><br/><br/>
        <input type="submit" name="submit"/>
        </form>

        {anil && <h1 style={{color: "red"}}>Please Enter All New Credintials</h1>}
        </center>
    </div>
  )
}

export default Login