const cache=new Map();


export default function fetchData(url){
    if(!cache.has(url)){
        cache.set(url,getData(url))
    }
    return cache.get(url);
}

async function getData(url){
    if(url.includes('/comments')){
       return await getComment(url);
    }else{
        throw Error('not implemented')
    }
}

async function getComment(url){
    const response=await fetch(url);
    const comments=await response.json();
    return comments;
}