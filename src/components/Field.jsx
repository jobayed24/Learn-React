import React, { Children } from "react";

const Field=({label,children,htmlFor,error})=>{
        const id=htmlFor || getIdFromChildren(children)
        
    return(
        <>
            <label htmlFor={id}>{label}</label>
            {children}
            {!!error && <div className="text-red-500">{error.message}</div>}
        </>
    )
}

function getIdFromChildren(children){
    const element=Children.only(children)
    if(element?.props?.id){
        return element.props.id
    }
}
export default Field;