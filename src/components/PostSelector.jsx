import React from 'react'

export default function PostSelector({posts,
    onSelector}) {
  return (
    <select className='border-black border-2 w-[200px]' onChange={onSelector}>
        <option value=''>Select Post</option>
        {posts.map((post)=>(
            <option key={post.id} value={post.id}>{post.title}</option>
        ))}

    </select>
  )
}
