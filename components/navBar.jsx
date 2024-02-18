import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      
         
<nav className="bg-white shadow-md fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
  <a  className="flex items-center space-x-3 ">
      <span className="self-center text-2xl font-extrabold whitespace-nowrap  ">BLOG</span>
  </a>
  
  <div className="items-center justify-between   " id="navbar-sticky">
    <ul className="flex my-2 mx-2 font-medium  gap-5  rounded-lg  ">
      <li>
        <Link href={'/homeblog'}  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 " >Home</Link>
      </li>
      <li>
        <a  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">About</a>
      </li>
      <li>
        <Link href={'/AddPost'}  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">Post</Link>
      </li>
      <li>
        <a  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100   ">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar
