'use client'
import NavBar from '@/components/navBar';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'


const Page = ({params}) => {
    const id = params.slug;

  
   const [blog, setBlog] = useState([])

   useEffect(() => {
      const option = {
        method: 'GET',
        url:  `https://blogfastapi-7kac.onrender.com/blog/posts/${id}`,
         header: 'accept: application/json'
      }
      toast.promise(
         axios.request(option).then(function (res) {
            setBlog([res.data])
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
    <div className='flex justify-center p-5 pt-20 '>
      {blog.map((item)=>(
        <div className='w-[77%] min-h-screen  bg-white rounded-lg shadow-xl '>
          <div className='m-10 bg-red-50 flex flex-col gap-10'>
            <h1 className='flex justify-center' >{item.title}</h1>
            <div>
              <pre>{item.content}</pre>
            </div>
            <div className='flex justify-end p-5'>
              <h1>{item.author}</h1>
            </div>
          </div>
        </div>
      ))}

     
    </div>
    </>
  )
}

export default Page
