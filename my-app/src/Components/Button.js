import React from 'react'

const Button = ({value, className, onClick}) => {
  return (
    <div>
      <button className={className} onClick={onClick}> {value}</button>
    </div>
  )
}

export default Button
