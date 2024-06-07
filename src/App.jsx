import { useState } from 'react'
import './App.css'
import ColorDemo from './components/ColorDemo'
import ShapDemo from './components/ShapDemo'
import SizeDemo from './components/SizeDemo'
function App() {
  const [selectDemo,setSelectDemo]=useState(null)

  return (
    <>
      <h1>React Lazy load explained</h1>
      <div>
        <button onClick={()=>setSelectDemo('color')}>Color Demo</button>

        <button onClick={()=>setSelectDemo('shap')}>Shap Demo</button>
        <button onClick={()=>setSelectDemo('size')}>Size Demo</button>
      </div>

      <div>
        {selectDemo==='color'&& <ColorDemo />}
        {selectDemo==='shap'&& <ShapDemo />}
        {selectDemo==='size'&& <SizeDemo />}
      </div>
     </>
  )
}

export default App
