import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const[numberAllowed,SetNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

  // ref hook : 
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*~";

    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()* str.length+1)
      pass+=str.charAt(char);

    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])


  // copy password to clipboard
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select(); // to select form input tag
    passwordRef.current?.setSelectionRange(0,)
    window.navigator.clipboard.writeText(password)
  },[password])



  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className=' text-center text-white my-3'>Password Generator</h1>

   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
   <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />

        <button 
        onClick={passwordGenerator}
         className='outline-none
            text-white px-3
             py-0.5 mr-3 ml-4 rounded-xl shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   '>
              Generate
        </button>


        <button 
        onClick={copyPasswordToClipboard}
         className='outline-none transition duration-2 ease-in-out 
        hover:scale-105 hover:shadow-lg 
        text-white px-3 py-1 shrink-0 rounded-xl 
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' >
              Copy
        </button>
   </div>

    <div className='flex text-sm gap-x-2'>

      <div className='flex items-center gap-x-1'>
        <input type="range" min={8} max={50} value={length} 
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label>Lenght:{length}</label>
      </div>
      
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{SetNumberAllowed((prev)=>!prev);          
        }} />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
       <input type="checkbox"
       defaultChecked={charAllowed} 
       id='characterInput'
       onChange={()=>{
        setCharAllowed((prev)=>!prev);
       }}/> 
      <label htmlFor="characterInput">Characters</label>
      </div>  

    </div>
  </div>  

    </>
  )
}

export default App
