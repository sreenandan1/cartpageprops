import React from 'react'

import"./Header.css"
import { Link, Outlet } from 'react-router-dom'
function Header() {
  return (
    <div>
      <span className='header'>Read context API Tutorial</span>
      <ul className='nav'>
        <li className='prod'>
          <Link to='/'>Home page</Link>
        </li>
        <li className='prod1'>
           <Link to='/cart'>Cart</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Header