"use client"
import React, { useEffect, useState } from 'react'
import NavBar from '@/components/navBar'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AddPost = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [blogCont, setBlogCont] = useState('');

    const handletitle = (e) => {
        setTitle(e.target.value);
    }
    const handleauthor = (e) => {
        setAuthor(e.target.value);
    }
    const handleblogCont = (e) => {
        setBlogCont(e.target.value);
    }

    const handlePost = (e) => {
            
        const option = {
            method: 'POST',
            url: 'https://blogfastapi-7kac.onrender.com/blog/posts/',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmhpc2hlazEyIiwidXNlcl9pZCI6IjY1ZDA3N2JjYzM4MWMyZjBjYTMxMjBhMCIsImV4cCI6MTcwODUzODc1NX0.xBNYzwXKO1_7FWP2Fd5Bms0iBoQ-liROyGv3OoXUM8g'
    
            },
            data: {
                title: title,
                content: blogCont,
                author: author
            }
    
            
        }
    
        axios.request(option).then(function (res) {
            toast.success("Add successfully !!")
            console.log(res.data);
        }).catch(function (error) {
            toast.error(error.message);
            console.log(error);
        })

        const newblogCont = '';
        setBlogCont(newblogCont);

        const newtitle = '';
        setTitle(newtitle);

        const newauthor = '';
        setAuthor(newauthor);


    }

   


    return (
        <div className=''   >
            <Toaster/>
            <NavBar />
            <div className='bg-white block  mt-20 mx-5 h-[40rem] rounded-lg shadow-lg p-20 '>
                <div className='mx-10 text-gray-500 mb-8 text-2xl'>
                    Write your own blog
                </div>
                <div className='px-10 pt-8  '>

                    <div className='flex w-full gap-x-8'>

                        <div className='flex w-1/2 '>
                            <label htmlFor="title" className="block mb-2 text-xl font-medium text-gray-900">Title:</label>

                            <input type="text" value={title} onChange={handletitle} id='title' className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 ml-4" placeholder="Enter your Title" required />
                        </div>
                        <div className='flex w-1/2 '>
                            <label htmlFor="author" className="block mb-2 text-xl font-medium text-gray-900">Author:</label>

                            <input type="text" value={author} onChange={handleauthor} id='author' className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block pl-2.5 ml-4" placeholder="  author name" required />
                        </div>
                    </div>
                    <div className='mt-16'>
                        <label htmlFor="blogid" className="block mb-2 text-xl font-medium text-gray-900">Write your blog :-</label>
                        <textarea name="BlogContant" value={blogCont} onChange={handleblogCont} id="blogid" className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pt-2 pl-2.5  w-full  ' cols="30" rows="10"></textarea>

                    </div>
                    <div className='flex justify-end items-end mt-4'>
                        <button onClick={handlePost} className="text-white mt-2 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-40 text-sm py-2 px-2 text-center">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost
