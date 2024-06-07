import wrapPromise from "./wrapPromise";

export default function fetchPost(url){
    const response=fetch(url).then((res)=>res.json())
    return wrapPromise( response);
}