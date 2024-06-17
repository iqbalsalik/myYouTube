import React from 'react';
import CommentList from './CommentList';

// const comments = [
//     {
//         name:"Salik Iqbal",
//         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//         reply:[
//             {
//                 name:"Salik Iqbal",
//                 text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//                 reply:[]
//             },{
//                 name:"Salik Iqbal",
//                 text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//                 reply:[
//                     {
//                         name:"Salik Iqbal",
//                         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//                         reply:[]
//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         name:"Salik Iqbal",
//         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//         reply:[]
//     },
//     {
//         name:"Salik Iqbal",
//         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//         reply:[]
//     },
//     {
//         name:"Salik Iqbal",
//         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//         reply:[{
//             name:"Salik Iqbal",
//             text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//             reply:[{
//                 name:"Salik Iqbal",
//                 text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//                 reply:[]
//             },{
//                 name:"Salik Iqbal",
//                 text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//                 reply:[{
//                     name:"Salik Iqbal",
//                     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//                     reply:[]
//                 },]
//             },]
//         },{
//             name:"Salik Iqbal",
//             text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//             reply:[]
//         },]
//     },
//     {
//         name:"Salik Iqbal",
//         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//         reply:[]
//     },
// ]



const CommentContainer = ({comments}) => {
  return (
    <div>
        <h1 className='font-bold p-5 m-2'>Comments:</h1>
       <CommentList comment={comments} />
    </div>
  )
}

export default CommentContainer