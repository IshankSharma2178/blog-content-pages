import React from 'react'
import Headroom from 'react-headroom'
import blog from '../assests/blog.svg'

function Header() {
    
  return (
    <Headroom>
    <div className=' mt-2 mb-4 mx-3'>
        <header className=' text-center shadow-md bg-white bg-opacity-50 backdrop-blur-sm justify-center items-center flex rounded-lg h-16 tracking-wider gap-x-[2px] m-auto'>
        <img src={blog} width={50}/>
        <h1 className=' font-semibold text-[#333333] text-[2.7rem]'>Blogs</h1>
        </header>
    </div>
    </Headroom>
  )
}

export default Header