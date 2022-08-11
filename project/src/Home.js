import { useContext,useEffect, useState } from 'react';
import { store } from './App';

import { Navigate } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
    const [token,setToken] = useContext(store)
    // const [time, settime] = useState(false)
    const [value,setValue]=useState("")
    let [curr, setCurr] = useState(5);
    const logout=()=>{
        axios.post("http://localhost:5000/home").then(res =>{
            alert("submited successfully")

            setToken({...token,tok:false})
            
        })
       
    } 

    useEffect(() => {
        setTimeout(timer, 5000); //for every 5 sec changing in time
    }, [curr]);
    function timer() {
        setCurr((prev) => {
            prev = prev - 5;
            return prev;
        });
    }
    let min = Math.floor(curr / 60);
    let sec = Math.floor(curr % 60);
    
    if (min > 0 && min < 10) {
        min = "0" + min;
    }
    if (sec > 0 && sec < 10) {
        sec = "0" + sec;
    }
    if (sec <= 0) {
        sec = "00";
        if (min == 0) {
            min = "00";
            // alert("time")
            logout()
        }
    }
  
    if(token.tok)
  return (
    <div>
        <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
            <h1 style={{color: "blue"}}>{token.name}</h1>
        </li>
        <li class="nav-item">
            <a >{min}:{sec}</a>
        </li>

        <li class="nav-item">
            <input onClick={logout} type="button" value="Submit"/>
        </li>
    
        </ul>
        <center>
            
        <form>
            <textarea  onChange={()=>setValue(value)} value={value}className='aka' type="text" name="text" placeholder='Enter Message Here '/><br/><br/>
            <input onClick={logout} type="button" value="Submit"/>

        
        </form>

        </center>
        
    </div>
  )
  else
    return <Navigate to='/' />
}

export default Home