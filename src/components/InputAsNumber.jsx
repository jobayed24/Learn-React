import React from 'react';

export default function InputAsNumber({onChange,value,...rest}) {
    
    function handleOnChange(e){
        const valueNumber=e.target.valueAsNumber || 0;
        onChange(valueNumber)

    }
  return (
    <>
      <input
        onChange={handleOnChange}
        value={value}
        {...rest}
        type='number'
      />
    </>
  )
}
