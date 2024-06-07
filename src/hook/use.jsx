
export default function use(promise) {
    if(promise.status==='fulfilled'){
        return promise.value
    }else if(promise.status==='rejected'){
        throw promise.reason;
    }else if(promise.status==='pending'){
        throw promise
    }else{
        promise.then(
            (res)=>{
                promise.status='fulfilled',
                promise.value=res
            },
            (reason)=>{
                promise.status='rejected',
                promise.reason=reason
            }
        )
        throw promise;
    }
}
