import React from 'react';
import fetchPost from '../utils/fetchPosts';
const resours=  fetchPost('https://jsonplaceholder.typicode.com/posts?_limit=5')
export default function Posts({setOnSelectorId}) {
    function handleOnSelector(event){
        setOnSelectorId(event.target.value)
      }
const posts=resours.read();
console.log(posts)
  return (
    <div>
     <select className='border-black border-2 w-[200px]' onChange={handleOnSelector}>
        <option value=''>Select Post</option>
        {posts && posts.map((post)=>(
            <option key={post.id} value={post.id}>{post.title}</option>
        ))}

    </select>
    </div>
  )
}
