import { useEffect, useState } from 'react';
import './App.css';
import Comments from './components/Comments';
import PostSelector from './components/PostSelector';

function App() {
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([]);
    const [errors,setErrors]=useState(null)
    const [onSelectorId,setOnSelectorId]=useState(null)
  function handleOnSelector(event){
    setOnSelectorId(event.target.value)
    console.log(event.target.value)
  }

    useEffect(()=>{
      setLoading(true)
      const fetchPost=async()=>{
          try{
            const response=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            const data=await response.json();
            if(response.ok){
              setLoading(false)
              setPosts(data)
            }else{
              setLoading(false)
              setErrors('there was an error occured')
            }
          
          }catch(error){
            setLoading(false)
            setErrors(error.message)
          }
      }
      fetchPost();
    },[])
    let postContent;
    if(loading){
      postContent=<div>Posts loading...</div>
    }else if(!loading && errors){
      postContent=<div className='error'>{errors}</div>
    }else{
      postContent=(
        <PostSelector posts={posts} onSelector={handleOnSelector} />
      )
    }
  return (
    <>
      <h1 className='text-3xl'>React Suspense</h1>

      <div>
        {postContent}
        {onSelectorId && <Comments postId={onSelectorId} />}
      </div>
    </>
  )
}

export default App
