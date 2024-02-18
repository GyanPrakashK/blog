import React from 'react'
import NavBar from '@/components/navBar'

const AddPost = () => {
    return (
        <div className=''   >
            <NavBar />
            <div className='bg-white block  mt-20 mx-5 h-[40rem] rounded-lg shadow-lg p-20 '>
                <div className='mx-10 text-gray-500 mb-8 text-2xl'>
                    Write your own blog
                </div>
                <div className='px-10 pt-8  '>

                    <div className='flex w-full gap-x-8'>

                        <div className='flex w-1/2 '>
                            <label htmlFor="title" className="block mb-2 text-xl font-medium text-gray-900">Title:</label>
                            {/* <input type="text" className='border border-gray-900 rounded-lg hover:focus:ring-black   '/> */}
                            <input type="text" id='title' className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 ml-4" placeholder="Enter your Title" required />
                        </div>
                        <div className='flex w-1/2 '>
                            <label htmlFor="title" className="block mb-2 text-xl font-medium text-gray-900">Author:</label>
                            {/* <input type="text" className='border border-gray-900 rounded-lg hover:focus:ring-black   '/> */}
                            <input type="text" id='title' className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block pl-2.5 ml-4" placeholder="  author name" required />
                        </div>
                    </div>
                    <div className='mt-16'>
                        <label htmlFor="blogid" className="block mb-2 text-xl font-medium text-gray-900">Write your blog :-</label>
                        <textarea name="BlogContant" id="blogid" className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pt-2 pl-2.5  w-full  ' cols="30" rows="10"></textarea>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost
