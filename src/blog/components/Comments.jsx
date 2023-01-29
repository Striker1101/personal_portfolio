import React from 'react'

export default function Comments({postID, comments, setComments}) {
   

return (
    <div className='commentsContainer'>
        <div className='comments'>
            {
                comments.map((comment, i)=>{
                    return(
                        <div key={i}
                        data-id={`${comment._id}`}
                        style={{
                            backgroundColor:'wheat',
                            borderRadius:'10px',
                            marginTop:'20px',
                            paddingLeft:'10px',
                            paddingBottom:'5px'
                        }}
                        >
                        <h3>{comment.username}</h3>
                        <p>{comment.text}</p>
                        <p style={{float:'right'}}>{new Date(comment.createdAt).toDateString()}</p>
                        </div>
                        
                    )
                })
            }
        </div>
      </div>
  )
}
