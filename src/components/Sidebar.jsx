import React from 'react'



const Sidebar = () => {
  return (
    <div className='hidden md:flex flex-col flex-[0.25] bg-[#042D29] text-gray-400 items-center py-3 '>
      <p className='font-bold text-3xl underline '>NewsApp</p>

      <div className=' m-5  border-spacing-1 p-2 flex flex-col gap-5 md:font-extrabold text-yellow-50 '>
            {['Business','Entertainment','Environment','Food','Health','Politics','Science','Sports','Technology','Top','World'].map((item)=> (
              <a className='hover:underline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-250' href=''>:{item}</a>
            ))}
        {/* <a href=''>Business</a>
        <a href=''>Entertainment</a>
        <a href=''>Environment</a>
        <a href=''>Food</a>
        <a href=''>Health</a>
        <a href=''>Politics</a>
        <a href=''>Science</a>
        <a href=''>Sports</a>
        <a href=''>Technology</a>
        <a href=''>Top</a>
        <a href=''>World</a> */}
      </div>

    </div>
  )
}

export default Sidebar
