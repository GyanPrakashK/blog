"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');

    const [loginOrNot, setLoginOrNot] = useState(true);

    const handleUsername = (e) => {
        setUserName(e.target.value);
    }

    const handlepassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       if(loginOrNot=== false){
           
           const option = {
                method: 'POST',
                url: 'https://blogfastapi-7kac.onrender.com/auth/register',
                header: 'Content-Type: application/json',
                data: {
                    username: userName,
                    password: password
                }}
       
                axios.request(option).then(function(res){
                    console.log(res.data);
                }).catch(function(error){
                console.log(error);
            })
    } else{
        const option = {
            method: 'POST',
            url: 'https://blogfastapi-7kac.onrender.com/auth/login',
            header: 'accept: application/json',
            data: {
                username: userName,
                password: password
            }}
   
            axios.request(option).then(function(res){
                console.log(res.data);
            }).catch(function(error){
            console.log(error);
        })

    }
        

    }


    return (
        <div className=''>


            <div className=' h-[100vh]   flex justify-center items-center'>

                <form className="bg-white py-8 px-10 rounded-2xl shadow-md w-96" onSubmit={(e)=>handleSubmit(e)}>
                    <div className='flex justify-center items-center text-black font-bold text-xl mb-2 '><h1>{loginOrNot ? "Sign In" : "Register"} </h1></div>
                    <div className="mb-5">
                        <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">Username.</label>
                        <input type="text" id="mobile" value={userName} onChange={(e)=>handleUsername(e)} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your username" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" id="password" value={password} onChange={(e)=>handlepassword(e)} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5" placeholder="Enter your password" required />
                    </div>

                    <div className='w-full'>
                        <button type="submit" className="text-white mt-2 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full text-sm py-2 px-2 text-center">Submit</button>
                    </div>
                    <div onClick={() => { setLoginOrNot(!loginOrNot) }} className=" text-right   mt-2">
                        <div >{loginOrNot ? <div className=' flex '>Don't have account? <div className='text-blue-700 hover:underline'>Register </div></div> : <div className=' flex '>Already have account? <div className='text-blue-700 hover:underline'>Login </div></div>}</div>
                    </div>
                </form>
            </div>




        </div>
    )
}

export default Login
