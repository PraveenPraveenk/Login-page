import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id={style.h1}>
        <Link to="/">Create Users</Link>
        <Link to="/user">Users</Link>
      
    </div>
  )
}

export default Home
