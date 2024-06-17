import React from 'react'
import Comments from './Comments'

const CommentList = ({comment}) => {
  // const data = comment?.snippet?.topLevelComment?.snippet

//THIS IS THE EXAMPLE OF DESPLAYING NESTED COMMENTS TO NTH LEVEL USING COMPONENT RECURSION
  // return (
  //   <div>
  //       {comment.map((c,index)=>{
  //           return <div key={index}>
  //               <Comments  comment={c}/>
  //               <div className='ml-5 border-l-black'>
  //                   <CommentList comment={c.reply} />
  //               </div>
  //           </div>
             
  //       })}
  //   </div>
  // )

  if(!comment) return

  return (
      <div>
          {comment.map((c,index)=>{
              return <div key={index}>
                  <Comments  comment={c}/>
              </div>
               
          })}
      </div>
    )
}

export default CommentList