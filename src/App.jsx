import { useState } from 'react';
import './App.css';
import Comments from './components/Comments';
import Posts from './components/Posts';

function App() {
  const [onSelectorId,setOnSelectorId]=useState(null)
  
  return (
    <>
      <h1 className='text-3xl'>React Suspense</h1>

      <div>
        <Posts setOnSelectorId={setOnSelectorId}/>
        {onSelectorId && <Comments postId={onSelectorId} />}
      </div>
    </>
  )
}

export default App
