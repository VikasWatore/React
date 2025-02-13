import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
const Github = () => {
    // const [data,setData]=useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/vikaswatore')
    //  .then(res=>res.json())
    //  .then(data=>{
    //      console.log(data)
    //     setData(data)
    // })
    // }, [])
    
    const data=useLoaderData()
  return (
    <div className='text-center bg-gray-600 text-white
     p-4 text-3xl'>Github Followers: {data.following}
     
     <img className='' src={data.avatar_url} alt="Git Picture" width={300} />
      </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/vikaswatore')
  return response.json()
}