import React, { useState } from 'react'
import '../../../Css/UserComponents/Shared/Counter.css'

const Counter = ({ value, onChange }) => {
  const [count, setCount] = useState(value)

  const handleDecrement = () => {
    const newCount = Math.max(1, count - 1)
    setCount(newCount)
    onChange && onChange(newCount)
  }

  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
    onChange && onChange(newCount)
  }

  return (
    <div className="counter1">
      <div className="minus" onClick={handleDecrement}>-</div>
      <div className="variable">{count}</div>
      <div className="plus" onClick={handleIncrement}>+</div>
    </div>
  )
}


export default Counter