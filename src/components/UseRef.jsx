import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const UseRef = () => {
    const [value,setValue]=useState("")
    const count=useRef(0)

    useEffect(()=>{
        count.current=count.current+1
    })
  return (
    <div>
        <h1>useRef with implementation--</h1>
        <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
        <h1>rendered {count.current} times</h1>
    </div>
  )
}

export default UseRef