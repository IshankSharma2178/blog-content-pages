import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
    const {page ,totalPages,handlerPageChange}  =useContext(AppContext)
  return (
    <div className='flex justify-center items-center h-14 w-full  border-t-[3px] fixed bottom-0 bg-white   border-[#d1d5db] '>
        <div className='w-[700px]  justify-between flex'>
            <div className='flex gap-x-4'>
            {
                page>1 &&
                (<button className='border border-gray-300 px-[15px] text-[1.1rem] border-[2px] py-[4px] rounded-md' onClick={()=>handlerPageChange(page-1)}>
                    Previous
                </button>)
            }
            {
                page<totalPages&&
                (<button className='border flex items-center  border-gray-300 px-[15px] text-[1.1rem] border-[2px] py-[4px] rounded-md' onClick={()=>handlerPageChange(page+1)}>
                    Next
                </button>)
            }
            </div>
            <p className='flex font-semibold flex items-center p-auto'>Page{page} of {totalPages}</p>
        </div>
    </div>
  )
}

export default Pagination