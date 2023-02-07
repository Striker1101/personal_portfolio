import React from 'react'

export default function Post({post}) {
    return (
    <div >
      <div>
        <h1 style={{textAlign:'center'}}>
            {post.title.toUpperCase()}
        </h1>
        <div className='content'>
          <p>
          {post.content}
          </p>
        </div>
        <h5 
        style={{float: 'right'}}>{new Date(post.date).toDateString()}</h5>
      </div>
    </div>
  )
}
