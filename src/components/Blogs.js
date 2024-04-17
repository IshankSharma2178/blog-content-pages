import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

function Blogs() {
    const {loading,posts} = useContext(AppContext)
    return (
    <div className=' flex justify-center mt-10  flex-col items-center  w-[400px] sm:w-[650px]  sm:max-w-[650px] m-auto'>
        {
            loading? (<Spinner></Spinner>):(
                posts.length===0?
                (<div>
                    <p>No posts found</p>
                </div>)
                :
                (posts.map((post)=>(
                    <div className='mb-10   w-screen sm:w-[650px]  sm:max-w-[650px] ' key={post.id}>
                        <p className='font-bold tracking-wide text-[1.3rem] '>{post.title}</p>
                        <p className='mt-2 text-sm'>
                            By <span className='italic'>{post.author}</span > on <span className='underline cursor-pointer font-medium'>{post.category}</span>
                        </p>
                        <p className='mb-4 text-sm'>Posted on {post.date}</p>
                        <p className='tracking-medium mb-2 text-wrap text-[1.04rem]'>{post.content}</p>
                        <div className='flex gap-x-3 text-nowrap mt-4 mb-5'>
                            {post.tags.map((tag,index) =>(
                                <span className='text-blue-800 cursor-pointer text-nowrap  underline  font-medium text-sm' key={index}>{`#${tag}`}</span>
                ))}
                        </div>
                        <h1></h1>
                    </div>
                )))
                    
                ) 
        }
    </div>
  )
}

export default Blogs