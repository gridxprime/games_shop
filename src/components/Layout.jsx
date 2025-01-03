import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './../App.css'

function Layout() {
  return (
    <>

    <header>
    <ul>
    <li><NavLink  style={{color: 'inherit', textDecoration: 'none'}} to='/'>Homepage</NavLink></li>
    <li><NavLink  style={{color: 'inherit', textDecoration: 'none'}} to='/games'>Games</NavLink></li>
    <li> <NavLink style={{color: 'inherit', textDecoration: 'none'}} to='/contacts'>Contacts</NavLink></li>
    <li> <NavLink  style={{color: 'inherit', textDecoration: 'none'}} to='/about'>About</NavLink></li>


    </ul>
    </header>

    <Outlet></Outlet>

    <footer>
    Best games
    </footer>
    </>
  )
}

export default Layout