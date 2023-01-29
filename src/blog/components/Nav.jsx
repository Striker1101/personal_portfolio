import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <div style={{display:'flex', justifyContent:'center', marginBottom:'20px'}} >
      <div style={{display:'flex', gap:'10px'}}>
        <Link to={'/'}>
          Home
        </Link>
        <Link to={'/blog'}>
          Blog Post
        </Link>
        <Link to={'/blog/sign-up'}>
          Sign up
        </Link>
        <Link to={'/blog/log-in'}>
          Login
        </Link>
      </div>
    </div>
  )
}
