'use client'
import NavBar from '@/components/navBar'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'


const HomePage = () => {

   const [blogs, setBlogs] = useState([])

   useEffect(() => {
      const option = {
         method: 'GET',
         url: 'https://blogfastapi-7kac.onrender.com/blog/posts/',
         // header: 'accept: application/json'
      }
      toast.promise(
         axios.request(option).then(function (res) {
            setBlogs(res.data)
            console.log(res.data);
         }).catch((error) => {
            console.log(error)
         })
         ,{
            loading:"Fetching Posts...",
            success: <b>Post available now!</b>,
            error: <b>Some error occured!</b>
         }
      )

   }, [])

 

   return (
      <>
         <div><Toaster/></div>
         <NavBar />
         <div className='my-20 mx-10  '>
            {blogs.map((blogcontant) => (
               
               <Link href={`/homeblog/${blogcontant.id}`} key={blogcontant.id} className='px-12 py-3 flex  items-start '>
                  <div className='px-12 py-12 bg-white shadow-sm hover:shadow-xl transition-all duration-100 rounded-lg w-full flex-row gap-12 grid'>
                     <div className='text-center '>
                        <div className='flex justify-center items-center'>title: <div className='ml-2'>{blogcontant.title}</div></div>
                     </div>
                     <div>
                        <div className='flex '> content:<pre className='ml-4 text-wrap '>{blogcontant.content}</pre></div>
                     </div>
                     <div className='text-end '>
                        <div className='flex justify-end items-end'>author: <p className='ml-2'>{blogcontant.author}</p></div>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </>
   )
}

export default HomePage
