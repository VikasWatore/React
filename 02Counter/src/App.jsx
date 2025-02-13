import { useState } from 'react'

import './App.css'

function App() {
  
  
 let [counter, setCounter] = useState(0) 
  /**
   * as we have seen abaove that although the variable values are increased but it was not shown on the outputScreen 
   * does to show that on outputscreen we use react Hooks
  */
  // let counter=5
   const addValue=()=>{
    if(counter!=20){
      setCounter(counter+1)
    }
  }  

    const removeValue=()=>{
      if(counter!=0){
        setCounter(counter-1)
      }
      else{
        
       console.log("you reach maximum zero");
      }
      
    }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value:{counter}</h2>
     <button
     onClick={addValue}
     >Add Value</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
