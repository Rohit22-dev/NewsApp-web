import React from 'react'



const Sidebar = () => {
  return (
    <div className='hidden md:flex flex-col flex-[0.25] bg-[#042D29] text-gray-400 items-center py-3 '>
      <p className='font-bold text-3xl underline '>NewsApp</p>

      <div className=' m-5  border-spacing-1 p-2 flex flex-col gap-5 md:font-extrabold text-yellow-50 '>
            {['Business','Entertainment','Environment','Food','Health','Politics','Science','Sports','Technology','Top','World'].map((item)=> (
              <button className=' hover:text-red-500 hover:animate-bounce  focus:text-red-500 cursor-pointer self-start' >{item}</button>
            ))}
      </div>
      <p className='mt-auto text-sm font-semibold'>In collaboration🤝 of Octivion and CrypticCode.</p>

    </div>
  )
}

export default Sidebar
