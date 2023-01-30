import React, { useEffect, useRef } from 'react'
import postData from '../post'
export default function Box({setComments, postID}) {
    const form = useRef()
    
    
    useEffect(()=>{
        form.current.addEventListener('submit', (e)=>{
            const text = document.getElementById('text').value
            e.preventDefault()
            postData(`${process.env.NODE_ENV === 'development' ?
            process.env.REACT_APP_DEV_MODE 
            : process.env.REACT_APP_PRO_MODE}/posts/${postID}/comments`, { text })
           .then((data) => { 
            if(data.json.comments === undefined){
            }else{
                setComments(data.json.comments)
            }
            });
            form.current.reset()
        })
       
    },[])
    
 return (

    <div>
           <h2 style={{textAlign:'center'}}>Comments</h2>
        <form ref={form} action="#" method="post">
            <div
            style={{
               width:'100%',
            display:'flex',
             justifyContent:'center',
            
             }} >
            <textarea style={{}} name="text" id="text" cols="50" rows="5"></textarea>
            <button  
            style={{
                right:'-5px',
            borderRadius:'50px',
             border:'transparent',
            backgroundColor:'transparent'}} 
             type="submit"><svg style={{width:'40px', height:'40px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>send</title><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /></svg></button>
            </div>
        </form>
    </div>
  )
}
