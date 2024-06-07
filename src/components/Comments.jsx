import React, { useEffect, useState } from 'react';

export default function Comments({postId}) {
    const [isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState(null);
    const [post,setPost]=useState([])
    console.log(post)

    useEffect(()=>{
        setIsLoading(true);
        const fetchPost=async()=>{
           try{
            const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        
            const data=await response.json();
            if(response.ok){
                setIsLoading(false);
                setPost(data)
            }else{
                setIsLoading(false)
                setIsError('there was an error for post')
            }
           }catch(error){
            setIsLoading(false)
            setIsError(error.message)
           }
        }
        fetchPost();
    },[postId])
    let commentData;
    if(isLoading){
        commentData=<div>loading comment data...</div>
    }else if(!isLoading && isError){
        commentData=<div className='error'>{isError}</div>
    }else{
        commentData=<ul>
            {post.map((cmt)=>(
                <li key={cmt.id}>{cmt.name}</li>
            ))}
        </ul>
    }
  return (
    <>
        <h2 className='text-xl'>Comments</h2>
        <div>
        {commentData}
        </div>
    </>
  )
}
