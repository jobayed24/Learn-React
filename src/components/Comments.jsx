import React from 'react';
import use from '../hook/use';
import fetchData from '../utils/fetchData';

export default function Comments({postId}) {
   const post = use(fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`))
  return (
    <>
        <h2 className='text-xl'>Comments</h2>
        <div>
        <ul>
            {post.map((cmt)=>(
                <li key={cmt.id}>{cmt.name}</li>
            ))}
        </ul>
        </div>
    </>
  )
}
