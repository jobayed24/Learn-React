import { Suspense, useState } from 'react'
import './App.css'
import demo from './utils/demo'
import importDemo from './utils/importDemo'
function App() {
  const [selectedDemo,setSelectedDemo]=useState(null)
  async function Demo(file){
    const Demo=await importDemo(file)
   return Demo;
  }
async function setSelectDemo(file){
    const Demos=await Demo(file)
    const DemoComponents= <Demos />
    setSelectedDemo(DemoComponents)
  }
  return (
    <>
      <h1>React Lazy load explained</h1>
      <div>
      {demo.map((button)=>(
        <button key={button.id} onClick={()=>setSelectDemo(button.file)}>{button.name}</button>
      ))}
        
      </div>

      <div>
        <Suspense fallback={<h2>Loadding...</h2>} >{selectedDemo}</Suspense>
      </div>
     </>
  )
}

export default App
