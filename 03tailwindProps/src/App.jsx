import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cards } from './Components/Cards'

function App() {



  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Cards user="Vikas" />
      <Cards user="Akash"/>
      <Cards />
    </>
  )
}

export default App
