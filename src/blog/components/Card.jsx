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
        borderRadius:'15px',
        overflow:'hidden'

        }}>
      <div style={{position:'relative'}}>
        <img style={{marginTop:'5px'}} src={post.imageUrl} alt="phototag" />
      <h2 style={{textAlign:'center', position:'relative'}}>{post.title}</h2>
      </div>
        <hr style={{width:'70vw'}}></hr>
      <p>{post.summary}</p>
      <div style={{ width:'100%'}}>
      <h5 style={{float:'right', marginRight:'5px'}}>Published on {date.toDateString()}</h5>
      </div>
       

    </div>
  )
}
