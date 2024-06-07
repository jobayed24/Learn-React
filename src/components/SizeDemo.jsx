import React from 'react'
import { Circle } from 'react-feather'

export default function SizeDemo() {
    const size=[12,24,36,44,60,72]
  return (
    <>
      <h1>Size Demo</h1>
        {size.map((items,index)=>(
            <Circle color="black" size={items} key={index} />
        ))}
    </>
  )
}
