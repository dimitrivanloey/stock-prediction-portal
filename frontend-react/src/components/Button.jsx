import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, cls, url }) => {
  return (
    <>
      <Link className={`btn ${cls}`} to={url}>
        {text}
      </Link>
    </>
  )
}

export default Button
