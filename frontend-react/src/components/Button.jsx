import React from 'react'

const Button = ({ text, cls }) => {
  return (
    <>
      <a className={`btn ${cls}`} href=''>
        {text}
      </a>
    </>
  )
}

export default Button
