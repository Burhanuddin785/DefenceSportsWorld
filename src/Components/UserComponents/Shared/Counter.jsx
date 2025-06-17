import React, { useState } from 'react'
import '../../../Css/UserComponents/Shared/Counter.css'

const Counter = ({value}) => {
    const [count, setCount] = useState(value)
  return (
    <div className="counter1">
                <div className="minus" onClick={()=>{setCount(Math.max(1, count-1))}}>-</div>
                <div className="variable">{count}</div>
                <div className="plus" onClick={()=>{setCount(count+1)}}>+</div>
            </div>
  )
}

export default Counter