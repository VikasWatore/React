import { useState } from "react"


function App() {
 const [color, setColor] = useState()

  return (
    <div className="w-full h-screen duration-200"
    style={{background:color}}
    >
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{background:"blue"}} onClick={()=>{setColor("blue")}} >Blue</button>

          <button className="outline-none px-4 py-1
          rounded-full text-black shadow-lg"
          style={{background:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>

          <button className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{background:"red"}} onClick={()=>{setColor("red")}}>Red</button>

          <button className="outline-none px-4 py-1
          rounded-full text-black shadow-lg"
          style={{background:"white"}} onClick={()=>{setColor("white")}}>white</button>


          <button className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{background:"orange"}} onClick={()=>{setColor("orange")}}>orange</button>

        </div>

      </div>

    </div>
     
    
  )
}

export default App
