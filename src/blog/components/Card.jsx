import React from 'react'

export default function Card({post}) {
const date = new Date(post.date)
  return (
    <div 
    style={{display:'flex',
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'whitesmoke',
       width:'80vw',
        flexDirection:'column',
        borderRadius:'15px'
        }}>
      <h2>{post.title}</h2>
        <hr style={{width:'70vw'}}></hr>
      <p>{post.summary}</p>
      <div style={{ width:'100%'}}>
      <h5 style={{float:'right', marginRight:'5px'}}>Published on {date.toDateString()}</h5>
      </div>
       

    </div>
  )
}
