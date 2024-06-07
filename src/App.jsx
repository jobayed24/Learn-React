import { Suspense, useState } from 'react';
import './App.css';
import Comments from './components/Comments';
import Posts from './components/Posts';

function App() {
  const [onSelectorId,setOnSelectorId]=useState(null)

  return (
    <>
      <h1 className='text-3xl'>React Suspense</h1>

      <div>
        <Suspense fallback={<h1>Loading posts...</h1>}>
        <Posts setOnSelectorId={setOnSelectorId}/>
        </Suspense>
        {onSelectorId && 
        <Suspense fallback={<h1>loading comments</h1>}>
         <Comments postId={onSelectorId} />
         
         </Suspense>}
      </div>
    </>
  )
}

export default App
