import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = () => {
  let [res,setres]=useState([])

  useEffect(()=>{
    
    axios.get("http://localhost:3000/employees")
    .then((response)=>{
      console.log(response.data);
      setres(response.data)
      console.log("got it");
    })
    .catch(()=>{
      console.log("not get");
    })
  },[])
  
  let deleteuser=(x)=>{
    let a=prompt("Type yes or no")
    if (a=="yes") {
    axios.delete(`http://localhost:3000/employees/${x}`)
    window.location.assign("/user")
    }
  }
  
  return (
    <div id={style.u}>
     {
      res.map((x)=>{
       return(
        <div key={x.id} id={style.u1}>
          <table>
            <tr>
              <th colSpan={2}>Employee : {x.id}</th>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{x.ename}</td>
            </tr>
            <tr>
              <td>Salary:</td>
              <td>{x.esalary}</td>
            </tr>
            <tr>
              <td>Company:</td>
            <td>{x.ecompany}</td>
            </tr>
            <tr>
              <td><Link to={`/edit/${x.id}`}className={style.a} ><button>Edit</button></Link></td>
              <td><button onClick={()=>{deleteuser(x.id)}}>Delete</button></td>
            </tr>
          </table>
          </div>
       )
        
      })
     }
    </div>
  )
}

export default User
