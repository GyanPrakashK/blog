'use client'
import NavBar from '@/components/navBar';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'


const Page = ({ params }) => {
  const id = params.slug;


  const [blog, setBlog] = useState([])

  useEffect(() => {
    const option = {
      method: 'GET',
      url: `https://blogfastapi-7kac.onrender.com/blog/posts/${id}`,
      header: 'accept: application/json'
    }
    toast.promise(
      axios.request(option).then(function (res) {
        setBlog([res.data])
        console.log(res.data);
      }).catch((error) => {
        console.log(error)
      })
      , {
        loading: "Fetching Posts...",
        success: <b>Post available now!</b>,
        error: <b>Some error occured!</b>
      }
    )

  }, [])


  return (
    <>
      <div><Toaster /></div>
      <NavBar />
      <div className='flex justify-center p-5 pt-20 '>
        {blog.map((item) => (
          <div className='w-[77%] min-h-screen  bg-white rounded-lg shadow-xl '>
            <div className='m-10  flex flex-col gap-10'>
              <h1 className='flex justify-center font-extrabold text-2xl mt-3 ' >{item.title}</h1>
              <div className='text-wrap p-8'>
                <pre className='text-wrap '>{item.content}</pre>
              </div>
              <div className='flex justify-end p-5 font-extrabold'>
                <h1>{item.author}</h1>
              </div>
            </div>
        <Link href={`/homeblog/slug/${id}`} className='flex justify-end items-end m-10  '>
          <button className="text-white mt-2 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-40 text-sm py-2 px-2 text-center">Edit Post</button>
        </Link>
          </div>
        ))}

      </div>
    </>
  )
}

export default Page
