import React, { useContext } from 'react'
import { UserContext } from '../App'

const DetailedNews = () => {
  const {Data,setData} = useContext(UserContext) 
  return (
    <div className="flex flex-[0.7] justify-center items-start ml-3 p-2 overflow-y-scroll scroll-hide  shadow-inner shadow-neutral-400 rounded-lg">
      asdfg
    </div>
  )
}

export default DetailedNews
